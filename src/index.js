import dotenv from 'dotenv';
import initMongoConnection from './db/initMongoConnection.js';
import setupServer from './server.js';

dotenv.config();
console.log('MongoDB URI:', process.env.MONGODB_URI);

initMongoConnection().then(() => {
  setupServer();
});
