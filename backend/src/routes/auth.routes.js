import { Router } from 'express';
import * as Controller from '../controllers/auth.controller.js';
import { validatorConstant as VALIDATOR } from '../public/constants/validators/common.validator.constant.js';
import { validate } from '../validators/auth.validators.js';
const routes = new Router();

const PATH = {
  REGISTER: '/register',
  LOGIN: '/login',
};

routes
  .route(PATH.REGISTER)
  .post(validate(VALIDATOR.REGISTER), Controller.registerUser);
routes.route(PATH.LOGIN).post(validate(VALIDATOR.LOGIN), Controller.loginUser);

export default routes;
