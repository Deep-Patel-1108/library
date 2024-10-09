import HTTPStatus from 'http-status';
import crypto from 'crypto';
import bcrypt from 'bcrypt';
import { validationResult } from 'express-validator';
import errorMessages from '../public/messages/errorMessage.js';

// const key = Buffer.from(process.env.ENCRYPTION_KEY, 'hex');
// const iv = Buffer.from(process.env.IV_KEY, 'hex');
const responseMessages = { ...errorMessages };

export const badRequestError = (res, errors, statusCode) => {
  let code, response;
  const error =
    typeof errors === 'object'
      ? responseMessages[errors.array()[0].msg]
        ? responseMessages[errors.array()[0].msg]
        : errors.array()[0].msg
      : responseMessages[errors]
      ? responseMessages[errors]
      : errors;
  const data = {
    // error: true,
    message: error,
  };
  code = statusCode ? statusCode : HTTPStatus.BAD_REQUEST;
  response = createErrorResponseJSON(data, code);
  return sendJSONResponse(res, code, response);
};

export const successResponse = (res, data, statusCode) => {
  let code, response;
  const { error: _, ...returnData } = data;
  code = statusCode ? statusCode : HTTPStatus.OK;
  response = createSuccessResponseJSON(returnData, code);
  return sendJSONResponse(res, code, response);
};

export const serverError = (res, message) => {
  let code, response;
  const data = { message: message || 'err_500' };
  code = HTTPStatus.INTERNAL_SERVER_ERROR;
  response = createErrorResponseJSON(data, code);
  return sendJSONResponse(res, code, response);
};

export const createSuccessResponseJSON = (data, code) => {
  if (data?.data?.rows?.length === 0) {
    code = HTTPStatus.NO_CONTENT;
  }
  const response = { status: code, ...data };
  return response;
};

export const createErrorResponseJSON = (error, code) => {
  const errorResponse = { statusCode: code, ...error };
  return errorResponse;
};

export const sendJSONResponse = (res, statusCode, data) => {
  res.status(statusCode).json(data);
};

// export const encryptText = async (text) => {
//   let cipher = crypto.createCipheriv(process.env.encrypt_Decrypt_Text, key, iv);
//   let encrypted = cipher.update(text);
//   encrypted = Buffer.concat([encrypted, cipher.final()]);
//   let encryptedData = encrypted.toString('hex');
//   return encryptedData;
// };

// export const decryptText = (text) => {
//   if (text === null || typeof text === 'undefined') return text;
//   let encryptedText = Buffer.from(text, 'hex');
//   let decipher = crypto.createDecipheriv(
//     process.env.encrypt_Decrypt_Text,
//     Buffer.from(key),
//     iv,
//   );
//   let decrypted = decipher.update(encryptedText);
//   decrypted = Buffer.concat([decrypted, decipher.final()]);
//   return decrypted.toString();
// };

export const hashToken = async () => {
  let resetToken = crypto.randomBytes(32).toString('hex');
  const bcryptSalt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hash(resetToken, Number(bcryptSalt));
  return hash;
};

export const encrypt = async (data) => {
  const salt = await bcrypt.genSalt(10);
  let mystr = await bcrypt.hash(data, salt);
  return mystr;
};

export const validateResult = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return badRequestError(res, errors);
  }
  next();
};

export const responseReturn = async (status, message, data) => {
  let result = { error: status };
  if (message)
    result = {
      ...result,
      message: responseMessages[message] ? responseMessages[message] : message,
    };
  if (data) result = { ...result, data: data };

  return result;
};

export const addPaginationToFilter = (filter, page, limit) => {
  return (filter = {
    ...filter,
    limit: limit,
    offset: (page - 1) * limit,
  });
};
