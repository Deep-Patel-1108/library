import { logger } from '../config/logger.js';
import User from '../models/user.model.js';

import { hashPassword, validatePassword } from '../utils/hashing.utils.js';
import JWTAuth from '../utils/jwt.utils.js';
import { responseReturn } from '../utils/utility.js';

//REGISTER USER
export const registerUser = async (body) => {
  logger.info(`registerUser() email : ${body.email}`);
  try {
    const { email, name, password } = body;
    const hashedPassword = hashPassword(password); // hashing user password

    const regJson = {
      email: email,
      name,
      password: hashedPassword,
    };

    await User.create(regJson);

    return responseReturn(false, 'User Register Successfully');
  } catch (error) {
    logger.error(`registerUser() failed error : ${error}`);
    return { error: true, message: 'errUserRegister' };
  }
};

// CHECK EMAIL EXISTANCE
export const isEmailExist = async (email) => {
  try {
    const user = await User.findOne({ email: email });
    return { status: !!user, data: user };
  } catch (error) {
    return { status: true, data: null };
  }
};

// FIND USER WITH USER ID
export const findUserById = async (id) => {
  const user = await User.findOne({ _id: id });
  return { status: !!user, data: user };
};

// USER VERIFICATION
export const verifyUser = async (email, password) => {
  logger.info('verifyUser()');
  console.log(email, 'email');
  const user = await User.findOne({ email: email });

  if (!user) return responseReturn(true, 'errWrongIdPassword');

  const validPassword = validatePassword(password, user.password);

  if (!validPassword) {
    return responseReturn(true, 'errWrongIdPassword');
  }

  return await login(user);
};

// LOGIN USER
export const login = async (user) => {
  logger.info('login()');

  const JWT = new JWTAuth();
  const tokenPayload = {
    ...user,
  };
  const token = await JWT.createToken(tokenPayload);

  const returnJson = {
    user: { name: user?.name, email: user?.email, role: user?.role },
    access_token: token,
  };

  console.log(returnJson);
  return responseReturn(false, 'User Logged in Successfully', returnJson);
};

export const createSuperAdmin = async () => {
  try {
    const superAdminJson = {
      name: process.env.ADMIN_NAME,
      email: process.env.ADMIN_EMAIL,
      password: hashPassword(process.env.ADMIN_PASSWORD),
      role: process.env.ADMIN_ROLE,
    };
    const superAdminExist = await User.findOne({
      role: superAdminJson.role,
    });
    if (superAdminExist) {
      logger.info('super admin exist already');
      return;
    }
    await User.create(superAdminJson);
    logger.info('super admin created successfully');
    return;
  } catch (error) {
    logger.error(`createSuperAdmin() failed error : ${error}`);
  }
};
