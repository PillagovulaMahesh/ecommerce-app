const mongoose = require('mongoose');

// Define the User schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true, // Ensure usernames are unique
        trim: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6, // Minimum length for the password
    },
    role: {
        type: String,
        enum: ['user', 'admin'], // Roles available
        default: 'user', // Default role is user
    },
    createdAt: {
        type: Date,
        default: Date.now, // Automatically set creation date
    },
});

// Create the User model
const User = mongoose.model('User', userSchema);

// Export the User model
module.exports = User;
