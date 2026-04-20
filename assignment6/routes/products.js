const express = require('express');
const router  = express.Router();
const Product = require('../models/Product');

// GET /api/products — fetch all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

// POST /api/products — add a new product (or seed multiple)
router.post('/', async (req, res) => {
  try {
    // Accept a single object OR an array
    const data = req.body;
    let saved;

    if (Array.isArray(data)) {
      saved = await Product.insertMany(data);
    } else {
      saved = await new Product(data).save();
    }

    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: 'Failed to add product(s)', details: err.message });
  }
});

module.exports = router;
