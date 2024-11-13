// import mongoose from 'mongoose';

// async function initMongoConnection() {
//   const { MONGODB_USER, MONGODB_PASSWORD, MONGODB_URL, MONGODB_DB } =
//     process.env;

//   const uri = `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_URL}/${MONGODB_DB}?retryWrites=true&w=majority`;

//   try {
//     await mongoose.connect(uri);
//     console.log('Mongo connection successfully established!');
//   } catch (error) {
//     console.error('Failed to connect to MongoDB', error);
//     process.exit(1);
//   }
// }

import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const initMongoConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected...');
  } catch (error) {
    console.error('MongoDB connection failed', error);
    process.exit(1);
  }
};

export default initMongoConnection;
