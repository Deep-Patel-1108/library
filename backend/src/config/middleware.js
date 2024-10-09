/**
 * Configuration of the server middlewares.
 */
import bodyParser from 'body-parser';
import morgan from 'morgan';
import passport from 'passport';
import cors from 'cors';
// import fileUpload from 'express-fileupload';
import session from 'cookie-session';
import { logHttpRequest, logResponse, logger } from './logger.js';
import { constant as APP_CONST } from '../public/constants/app.constant.js';
import express from 'express';
import { exec } from 'child_process';
// import { environmentVariables } from '../../package.json';
import os from 'os';
import { connectDB } from '../database/connection.js';
import { createSuperAdmin } from '../services/auth.service.js';

const MORGAN_DEV_FORMAT = 'dev';

const loggerstream = {
  write: function (message) {
    logger.info(message);
  },
};

// const missingEnvs = environmentVariables?.reduce((acc, curr) => {
//   if (!process.env[curr]) {
//     acc.push(curr);
//   }
//   return acc;
// }, []);

// if (missingEnvs?.length > 0) {
//   logger.error(`Missing Environment Variables : ${missingEnvs?.join(',')}`);
// }
// const MORGAN_COMBINE_FORMAT = 'combined';
export const middlewareConfigWrapper = (app) => {
  app.use(cors());
  app.options('*', cors());
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(express.static('src/public'));
  app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
  app.use(bodyParser.raw({ type: 'application/json' }));
  app.use(
    session({
      cookie: { maxAge: 60000 },
      secret: APP_CONST.SESSION_SECRET,
      signed: true,
      resave: true,
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(logHttpRequest);
  app.use(logResponse);
  app.use(morgan(MORGAN_DEV_FORMAT, { stream: loggerstream }));
  // app.use(fileUpload());

  process
    .on('unhandledRejection', (error) => {
      logger.error(
        `Unhandled Rejection at Promise : ${JSON.stringify(error)} ${
          error.stack
        }`,
      );
    })
    .on('uncaughtException', (error) => {
      logger.error(
        `Uncaught Exception thrown : ${JSON.stringify(error)} ${error.stack}`,
      );
      process.exit(1);
    });
};

export const listen = (app, port) => {
  if (!port) {
    return logger.error(
      'please provide valid port number ===> failed to listen',
    );
  }
  app.portNumber = port;
  app
    .listen(port, async () => {
      await connectDB();
      logger.info('server is running on port :' + port);
      createSuperAdmin();
    })
    .on('error', function (err) {
      if (err.code === 'EADDRINUSE') {
        logger.debug(
          `----- Port ${port} is busy, trying again with ${port} ----`,
        );
        const killCommand =
          os.platform() === 'win32'
            ? `npx kill-port ${port}`
            : `npx kill-port ${port}`;
        exec(killCommand, () => {
          listen(app, port);
        });
      } else {
        logger.error(err);
      }
    });
};

export const openTerminalAndRunCommand = () => {
  const isWindows = process.platform === 'win32';
  const command = 'lt --port 8500 --subdomain therupee';
  if (isWindows) {
    exec(`start cmd.exe /K "${command}"`);
  } else {
    exec(`gnome-terminal -- bash -c "${command}; exec bash"`);
  }
};
