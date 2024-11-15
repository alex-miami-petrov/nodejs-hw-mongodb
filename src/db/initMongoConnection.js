// import mongoose from 'mongoose';
// import dotenv from 'dotenv';

// dotenv.config();

// const initMongoConnection = async () => {
//   try {
//     await mongoose.connect(process.env.MONGODB_URI);
//     console.log('MongoDB connected...');
//   } catch (error) {
//     console.error('MongoDB connection failed', error);
//     process.exit(1);
//   }
// };

// export default initMongoConnection;

import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

process.env.MONGODB_URI =
  'mongodb+srv://thefeex:miamipass@miami.fnzip.mongodb.net/miami?retryWrites=true&w=majority';

console.log('MongoDB URI:', process.env.MONGODB_URI);

const initMongoConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected...');
  } catch (error) {
    console.error('MongoDB connection failed', error);
    process.exit(1);
  }
};

export default initMongoConnection;
