import { Router } from 'express';
import * as Controller from '../controllers/book.controller';
import { validate } from '../validators/book.validators';
import { validatorConstant as VALIDATOR } from '../public/constants/validators/common.validator.constant';
const routes = new Router();

const PATH = {
  BOOKS: '/',
};

routes
  .route(PATH.BOOKS)
  .post(validate(VALIDATOR.ADD), Controller.addBooks)
  .get(validate(VALIDATOR.GET), Controller.getBooks);

export default routes;
