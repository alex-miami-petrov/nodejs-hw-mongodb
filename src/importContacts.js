// import dotenv from 'dotenv';
// import mongoose from 'mongoose';
// import Contact from './models/contact';
// import contactsData from './contacts.json';

// dotenv.config();

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGODB_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('MongoDB connected...');
//   } catch (error) {
//     console.error('MongoDB connection failed', error);
//     process.exit(1);
//   }
// };

// const importContacts = async () => {
//   try {
//     const existingContacts = await Contact.countDocuments();
//     if (existingContacts > 0) {
//       console.log('Contacts already imported');
//       return;
//     }

//     await Contact.insertMany(contactsData);
//     console.log('Contacts have been successfully imported');
//   } catch (error) {
//     console.error('Error importing contacts:', error);
//   }
// };

// connectDB().then(() => {
//   importContacts();
// });
