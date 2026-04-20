const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();

const mongoose = require('mongoose');

// Connect MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/portfolioDB')
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Serve frontend
app.use(express.static(path.join(__dirname, '../public')));



const Contact = require('./models/contact');

app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, message } = req.body;

        console.log("New Message:");
        console.log(name, email, message);

        const newContact = new Contact({
            name,
            email,
            message
        });

        await newContact.save();   // ⭐ THIS LINE WAS MISSING

        console.log("Saved to DB ✅");

        res.json({ message: "Saved successfully!" });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error saving data" });
    }
});

// Start server
app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});