import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { logger } from '../config/logger';

dotenv.config();
const MONGO_URI = process.env.MONGO_URI;

function enableTimestampsPlugin(schema) {
  schema.set('timestamps', true);
  schema.set('versionKey', false);
}
const enableTimestamps = function (schema) {
  schema.plugin(enableTimestampsPlugin);
};

mongoose.plugin(enableTimestamps);

export const connectDB = async () => {
  await mongoose
    .connect(MONGO_URI, {
      autoIndex: true,
    })
    .then(() => {
      logger.info('Connected to MongoDB');
    })
    .catch((error) => {
      logger.error('Error connecting to MongoDB:', error);
    });
};
