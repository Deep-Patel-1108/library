import { body } from 'express-validator';
import { validatorConstant as VALIDATOR } from '../public/constants/validators/common.validator.constant.js';
import { validateResult } from '../utils/utility.js';

export const validate = (method) => {
  let error = [];
  switch (method) {
    case VALIDATOR.ADD: {
      error = [
        body('title', 'Please Enter a Valid Book Title')
          .not()
          .isEmpty()
          .isString(),
        body('author', 'Please Enter a Valid Book Author')
          .not()
          .isEmpty()
          .isString(),
      ];
      break;
    }
  }
  return [...error, validateResult];
};
