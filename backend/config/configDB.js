
const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.MONGO_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
      maxPoolSize: 50,
      wtimeoutMS: 2500,
      useNewUrlParser: true,
    });

    console.log('MongoDB connected Successfully!');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

module.exports = connectDB;
