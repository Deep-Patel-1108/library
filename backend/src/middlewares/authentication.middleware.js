import { logger } from '../config/logger.js';
import JWTAuth from '../utils/jwt.utils.js';
import { findUserById } from '../services/auth.service.js';
import { badRequestError } from '../utils/utility.js';
import httpStatus from 'http-status';

const authentication = async (req, res, next) => {
  logger.info('authentication()');
  let token = '';
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const jwt = new JWTAuth();
      const decoded = await jwt.verifyToken(token);
      const { status, data } = await findUserById(decoded._doc._id);
      if (!status) {
        return badRequestError(
          res,
          'errNotAuthorized',
          httpStatus.UNAUTHORIZED,
        );
      }
      req.user = data;
      next();
    } catch (error) {
      logger.error(`authentication failed error : ${error}`);
      return badRequestError(res, 'errNotAuthorized', httpStatus.UNAUTHORIZED);
    }
  } else {
    logger.error(`authentication failed error : no token`);
    return badRequestError(res, 'errNotAuthorized', httpStatus.UNAUTHORIZED);
  }
};

export default authentication;
