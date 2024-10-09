import { logger } from '../config/logger';
import { badRequestError, successResponse } from '../utils/utility';
import * as service from '../services/book.service';

// Add Books Controller
export const addBooks = async (req, res) => {
  logger.debug('addBooks');
  try {
    const { body } = req;
    const result = await service.addBook(body);
    if (result.error) {
      console.log(result);
      return badRequestError(res, result.message);
    }
    return successResponse(res, result);
  } catch (error) {
    logger.error(`addBooks controller failed error':${error}`);
    return badRequestError(res, 'Unable to Add Book at This Moment');
  }
};

// Get Books controller
export const getBooks = async (req, res) => {
  logger.debug('getBooks');
  try {
    const { query } = req;
    const result = await service.getBook(query);
    if (result.error) {
      return badRequestError(res, result.message);
    }
    return successResponse(res, result);
  } catch (error) {
    logger.error(`getBooks Controller failed error : ${error}`);
    return badRequestError(res, 'Unable to Get Book at This Moment');
  }
};
