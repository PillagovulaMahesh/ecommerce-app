const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// Create a new product
router.post('/', async (req, res) => {
    const { name, description, price, category, stock } = req.body;

    try {
        const newProduct = new Product({ name, description, price, category, stock });
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// Get all products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// Get a single product by ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// Update a product by ID
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, description, price, category, stock } = req.body;

    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            id,
            { name, description, price, category, stock },
            { new: true, runValidators: true } // Return the updated document
        );
        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(updatedProduct);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// Delete a product by ID
router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const deletedProduct = await Product.findByIdAndDelete(id);
        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json({ message: 'Product deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// Export the router
module.exports = router;
