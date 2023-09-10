import mongoose from 'mongoose';

const connectDB = (url: string): void => {
  mongoose.set('strictQuery', true);
  mongoose.connect(url)
    .then(() => console.log('connected to mongo'))
    .catch((err: Error) => {
      console.error('failed to connect with mongo');
      console.error(err);
    });
};

export default connectDB;
