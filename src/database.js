import mongoose from 'mongoose';
import config from './config';

mongoose
  .connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log('Db is connected'))
  .catch(error => console.log(error));
