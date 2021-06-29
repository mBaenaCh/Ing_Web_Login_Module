import mongoose from 'mongoose';

mongoose
  .connect('mongodb+srv://ingweb:ingweb@cluster0.7jtxs.mongodb.net/ingweb?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log('Db is connected'))
  .catch(error => console.log(error));
