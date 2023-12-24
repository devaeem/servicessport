// db.ts
import mongoose from 'mongoose';
const dotenv = require('dotenv')
require('dotenv').config()

const MONGODB_URI:string = process.env.DATABASE || '';

const connectToDatabase = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

const closeDatabaseConnection = () => {
  mongoose.connection.close();
};

export  {connectToDatabase , closeDatabaseConnection} ;
