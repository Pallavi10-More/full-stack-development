const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

// ─── Middleware ───────────────────────────────────────────────
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public'))); // serve frontend

// ─── MongoDB Connection ───────────────────────────────────────
mongoose.connect('mongodb://127.0.0.1:27017/fashionstore')
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// ─── Routes ──────────────────────────────────────────────────
const productRoutes = require('./routes/products');
const orderRoutes   = require('./routes/orders');

app.use('/api/products', productRoutes);
app.use('/api',          orderRoutes);

// ─── Start Server ─────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
