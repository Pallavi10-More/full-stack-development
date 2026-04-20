const express = require('express');
const router  = express.Router();
const Order   = require('../models/Order');

// POST /api/checkout — save a cart order to the database
router.post('/checkout', async (req, res) => {
  try {
    const { items, total } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({ error: 'Cart is empty' });
    }

    const order = await new Order({ items, total }).save();
    res.status(201).json({ message: '✅ Order placed successfully!', order });
  } catch (err) {
    res.status(500).json({ error: 'Checkout failed', details: err.message });
  }
});

module.exports = router;
