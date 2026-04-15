// Run once to populate your database: node seed.js
const mongoose = require('mongoose');
const Product  = require('./models/Product');

const sampleProducts = [
  {
    name:  'Classic White Tee',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80'
  },
  {
    name:  'Floral Summer Dress',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&q=80'
  },
  {
    name:  'Slim Fit Chinos',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&q=80'
  },
  {
    name:  'Denim Jacket',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=400&q=80'
  },
  {
    name:  'Striped Knit Sweater',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&q=80'
  },
  {
    name:  'High-Waist Trousers',
    price: 54.99,
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4a23b4?w=400&q=80'
  }
];

mongoose.connect('mongodb://127.0.0.1:27017/fashionstore')
  .then(async () => {
    await Product.deleteMany();            // clear existing
    await Product.insertMany(sampleProducts);
    console.log('✅ Database seeded with', sampleProducts.length, 'products');
    mongoose.disconnect();
  })
  .catch(err => {
    console.error('❌ Seed failed:', err);
    process.exit(1);
  });
