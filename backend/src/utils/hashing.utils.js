import bcrypt from 'bcrypt';

export const hashPassword = (password) => {
  const salt = 10;
  return bcrypt.hashSync(password, salt);
};

export const validatePassword = (password, originalPassword) =>
  bcrypt.compareSync(password, originalPassword);
