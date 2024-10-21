const mongoose = require('mongoose');

// Define the Product schema
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true, // Remove whitespace
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0, // Price cannot be negative
    },
    category: {
        type: String,
        required: true,
        trim: true,
    },
    stock: {
        type: Number,
        required: true,
        min: 0, // Stock cannot be negative
    },
    createdAt: {
        type: Date,
        default: Date.now, // Automatically set creation date
    },
    updatedAt: {
        type: Date,
        default: Date.now, // Automatically set update date
    },
});

// Middleware to update the updatedAt field on save
productSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

// Create the Product model
const Product = mongoose.model('Product', productSchema);

// Export the Product model
module.exports = Product;
