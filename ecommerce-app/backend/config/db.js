const mongoose = require('mongoose');

// MongoDB connection URI
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/ecommerce';

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;
const express = require('express');
const connectDB = require('./config/db');
const app = express();

// Connect to the database
connectDB();

// Other middlewares and routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
