import winston, { format } from 'winston';
import {
  white,
  blueBright,
  redBright,
  magentaBright,
  greenBright,
  yellowBright,
} from 'colorette';
const { combine, timestamp, printf } = format;
const loggerName = 'LIBRARY';

const logFormat = format.printf(({ level, message, timestamp }) => {
  const colorMap = {
    info: blueBright,
    warn: yellowBright,
    error: redBright,
    debug: magentaBright,
    verbose: blueBright,
  };
  const coloredName = greenBright(`[${loggerName}]`);
  const color = colorMap[level] || white;
  const coloredLevel = color(level.toUpperCase());
  return `${coloredName} ${timestamp} ${coloredLevel} ${message}`;
});

const customLevels = {
  error: 'error',
  warn: 'warn',
  info: 'info',
  verbose: 'verbose',
  debug: 'debug',
};

const logConfiguration = {
  levels: customLevels,
  level: 'verbose',
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      // level: "error",
      filename: 'logs/error.log',
      format: combine(
        timestamp({ format: 'DD/MM/YYYY hh:mm:ss A' }),
        printf(({ level, message, timestamp }) => {
          return `${timestamp} [${level.toUpperCase()}]: ${message}`;
        }),
      ),
    }),
  ],

  format: format.combine(
    format.timestamp({ format: 'DD/MM/YYYY hh:mm:ss A' }),
    format.align(),
    logFormat,
  ),
};

export const logger = winston.createLogger(logConfiguration);

// Custom middleware for logging HTTP requests
export const logHttpRequest = (req, res, next) => {
  const { method, originalUrl, ip } = req;
  logger.info(`HTTP ${method} request received from ${ip}: ${originalUrl}`);
  next();
};

// Custom middleware for logging response details
export const logResponse = (req, res, next) => {
  const originalSend = res.send;
  const colorMap = (statusCode) => {
    let color = white;
    if (statusCode >= 200 && statusCode <= 299) color = greenBright;
    if (statusCode >= 400 && statusCode <= 499) color = redBright;
    if (statusCode >= 500 && statusCode <= 599) color = magentaBright;

    return color;
  };

  const color = colorMap(res.statusCode);
  res.send = function (body) {
    logger.info(
      `Response sent for ${req.method} ${req.originalUrl}: ${color(
        res.statusCode,
      )}`,
    );
    return originalSend.call(this, body);
  };
  next();
};
