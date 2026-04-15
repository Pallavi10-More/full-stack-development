# 🛍️ Fashion Store

A full-stack e-commerce application built with **Node.js**, **Express.js**, and **MongoDB**. Browse fashion products, add items to your cart, and checkout with order tracking.

---

## 📋 Features

- **Product Catalog** — View all available fashion products
- **Shopping Cart** — Add/remove items and manage quantities
- **Checkout System** — Place orders and save them to the database
- **MongoDB Integration** — Persistent data storage for products and orders
- **RESTful API** — Clean API endpoints for products and orders
- **CORS Enabled** — Support for cross-origin requests
- **Responsive UI** — Frontend served from the `public` directory

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB, Mongoose |
| **Frontend** | HTML5, CSS3, JavaScript |
| **Additional** | CORS, Path utilities |

---

## 📁 Project Structure

```
.
├── server.js              # Main server file
├── seed.js                # Database seed script
├── package.json           # Dependencies & scripts
├── models/                # Mongoose schemas
│   ├── Product.js         # Product schema
│   └── Order.js           # Order schema
├── routes/                # API route handlers
│   ├── products.js        # Product endpoints
│   └── orders.js          # Order & checkout endpoints
└── public/                # Frontend assets
    ├── index.html         # Main HTML file
    ├── script.js          # Client-side JavaScript
    └── style.css          # Styling
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v14 or higher)
- **MongoDB** (local instance on `mongodb://127.0.0.1:27017`)

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start MongoDB server**
   ```bash
   mongod
   ```

3. **Seed the database** (optional — populate with sample products)
   ```bash
   npm run seed
   ```

4. **Start the server**
   ```bash
   npm start
   ```

   The server will run at **http://localhost:3000**

### Development Mode

For development with auto-reload on file changes:
```bash
npm run dev
```

---

## 📡 API Endpoints

### Products

| Method | Endpoint | Description |
|--------|----------|-------------|
| **GET** | `/api/products` | Fetch all products |
| **POST** | `/api/products` | Add a new product or bulk insert |

**POST Example:**
```json
{
  "name": "Vintage T-Shirt",
  "price": 29.99,
  "category": "tops",
  "description": "Comfortable and stylish"
}
```

### Orders

| Method | Endpoint | Description |
|--------|----------|-------------|
| **POST** | `/api/checkout` | Place an order |

**POST Example:**
```json
{
  "items": [
    { "name": "T-Shirt", "price": 29.99, "quantity": 2 },
    { "name": "Jeans", "price": 59.99, "quantity": 1 }
  ],
  "total": 119.97
}
```

---

## 📊 Database Schemas

### Product
```javascript
{
  name: String,
  price: Number,
  category: String,
  description: String,
  image: String,
  createdAt: Date
}
```

### Order
```javascript
{
  items: [
    {
      name: String,
      price: Number,
      quantity: Number
    }
  ],
  total: Number,
  createdAt: Date
}
```

---

## 📝 Scripts

- `npm start` — Start the production server
- `npm run dev` — Start development server with nodemon (auto-reload)
- `npm run seed` — Populate database with initial product data

---

## 🔧 Configuration

The server runs on **port 3000** and connects to MongoDB at `mongodb://127.0.0.1:27017/fashionstore`.

To change the port or database connection, edit `server.js`:
```javascript
const PORT = 3000; // Change port here
mongoose.connect('mongodb://127.0.0.1:27017/fashionstore'); // Change connection string here
```

---

## 📦 Dependencies

- **express** — Web framework
- **mongoose** — MongoDB ODM
- **cors** — Cross-origin resource sharing
- **nodemon** *(dev)* — Auto-reload development server

---

## 📝 License

This project is open source and available under the MIT License.

---

## 🤝 Contributing

Feel free to fork this repository, make improvements, and submit pull requests!

---

## 📧 Support

For issues or questions, please open an issue on the repository.

Happy shopping! 🎉
