import jwt from 'jsonwebtoken';
import { tokenTime } from '../public/constants/tokenTime.constant';
const SECRET = process.env.JWT_AUTH_SECRET;

class JWTAuth {
  async createToken(data, duration, SECRETKEY) {
    return new Promise((resolve, reject) => {
      try {
        const token = Promise.resolve(
          jwt.sign(data, SECRETKEY ? SECRETKEY : SECRET, {
            expiresIn: duration ? duration : tokenTime.defaultGenerateToken,
          }),
        );
        resolve(token);
      } catch (err) {
        reject(err);
      }
    });
  }

  async verifyToken(accessToken, SECRETKEY) {
    return new Promise((resolve, reject) => {
      try {
        const decoded = jwt.verify(accessToken, SECRETKEY ? SECRETKEY : SECRET);
        resolve(decoded);
      } catch (err) {
        reject(err);
      }
    });
  }
}
export default JWTAuth;
