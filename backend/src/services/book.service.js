import { logger } from '../config/logger';
import Books from '../models/book.model';
import {
  addPaginationToFilter,
  responseReturn,
  searchFunction,
} from '../utils/utility';

//add addBooks Service
export const addBook = async (body) => {
  logger.info('addBook()');
  try {
    const { title, author } = body;

    const createBook = await Books.create({
      title,
      author,
    });

    return responseReturn(false, 'Book created successfully', createBook);
  } catch (error) {
    logger.error(`addBook() failed error : ${error}`);
    return responseReturn(true, 'Unable to Add Book at This Moment');
  }
};

// Get getBook Service
export const getBook = async (query) => {
  logger.info('getBook');
  try {
    const { id, limit, page, search } = query;

    let filter = {};
    if (id) {
      filter = { ...filter, _id: id };
    }

    if (search) {
      filter = searchFunction(filter, search, ['title', 'author']);
    }

    if (limit && page) {
      filter = addPaginationToFilter(filter, page, limit);
    }

    let data = await Books.find(filter);

    if (id && data.length > 0) {
      data = data[0];
    }
    return responseReturn(false, 'Books Get Successfully', data);
  } catch (error) {
    logger.error(`getBook failed error:${error}`);
    return responseReturn(true, 'Unable to Get Book at This Moment');
  }
};
