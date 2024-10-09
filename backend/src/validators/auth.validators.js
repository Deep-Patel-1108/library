import { body } from 'express-validator';
import { isEmailExist } from '../services/auth.service.js';
import { validatorConstant as VALIDATOR } from '../public/constants/validators/common.validator.constant.js';
import { validateResult } from '../utils/utility.js';
import { patterns } from '../public/constants/Pattern.js';

export const validate = (method) => {
  let error = [];
  switch (method) {
    case VALIDATOR.REGISTER: {
      error = [
        body('name', 'Please Enter a Valid Name').not().isEmpty().isString(),
        body('email', 'Please Enter a Valid Email')
          .not()
          .isEmpty()
          .isEmail()
          .custom(isEmailValid),
        body('password', 'Please Enter a Valid Password')
          .not()
          .isEmpty()
          .isString()
          .matches(patterns.password)
          .withMessage(
            "'Password must Contain minimum 8 and maximum 20 characters, at least one uppercase letter, one lowercase letter, one number and one special character'",
          ),
      ];
      break;
    }
    case VALIDATOR.LOGIN: {
      error = [
        body('email', 'Please Enter a Valid Email').not().isEmpty().isEmail(),
        body('password', 'Please Enter a Valid Password')
          .not()
          .isEmpty()
          .isString(),
      ];
      break;
    }
  }
  return [...error, validateResult];
};

const isEmailValid = async (value) => {
  const { status } = await isEmailExist(value);
  if (status) throw new Error('Email Already Exist');
  return;
};
