import { Router } from 'express';
import authRoutes from './auth.routes.js';
import authentication from '../middlewares/authentication.middleware.js';
import book from './book.routes.js';

const routes = new Router();

const PATH = {
  AUTH: '/auth',
  BOOK: '/book',
};

routes.use(PATH.AUTH, authRoutes);

routes.use(PATH.BOOK, book);
routes.use(authentication);

export default routes;
