import dotenv from 'dotenv';
dotenv.config();

export default {
  JWT_SECRET: process.env.JWT_SECRET,
  SERVER_PORT: process.env.PORT,
  MONGODB_URI: process.env.MONGODB_URI,
};
