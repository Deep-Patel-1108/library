import { logger } from '../config/logger.js';
import * as service from '../services/auth.service.js';
import { badRequestError, successResponse } from '../utils/utility.js';

// Register User Controller
export const registerUser = async (req, res) => {
  logger.debug('registerUser');
  try {
    const { body } = req;
    const result = await service.registerUser(body);
    if (result.error) {
      return badRequestError(res, result.message);
    }
    return successResponse(res, result);
  } catch (error) {
    logger.error('registerUser');
    return badRequestError(res, 'errUserRegister');
  }
};

// Login User Controller
export const loginUser = async (req, res) => {
  logger.debug('loginUser');
  try {
    const {
      body: { email, password },
    } = req;

    const result = await service.verifyUser(email, password);
    console.log(result, 'result');
    if (result.error) {
      return badRequestError(res, result.message, result.statusCode);
    }
    return successResponse(res, result);
  } catch (error) {
    logger.error('loginUser');
    return badRequestError(res, 'errLogIn');
  }
};
