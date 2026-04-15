# Portfolio Website - Assignment 5

A full-stack portfolio website for Pallavi More with a contact form that stores messages in MongoDB.

## Project Overview

This is a full-stack web application built with Node.js and Express that serves a personal portfolio website. The application features a contact form that allows visitors to send messages, which are securely stored in a MongoDB database.

## Tech Stack

- **Frontend**: HTML5, CSS3
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **Middleware**: CORS, Body Parser

## Features

- 📱 Responsive portfolio website
- 📧 Contact form with message storage
- 🗄️ MongoDB integration for persistent data storage
- 🔒 CORS-enabled backend API
- 📋 Clean, modular project structure

## Project Structure

```
assignment5/
├── package.json              # Project dependencies and metadata
├── server/
│   ├── server.js            # Express server configuration and routes
│   └── models/
│       └── contact.js       # Mongoose Contact schema
├── public/
│   ├── index.html           # Main portfolio page
│   └── style.css            # Stylesheet
└── outputs/                 # Build/output directory
```

## Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Ensure MongoDB is Running**
   - Make sure MongoDB is installed and running on `mongodb://127.0.0.1:27017`

3. **Start the Server**
   ```bash
   node server/server.js
   ```
   - The server will start on `http://localhost:5000`

## API Endpoints

### POST /api/contact
Saves a contact message to the database.

**Request Body:**
```json
{
  "name": "Visitor Name",
  "email": "visitor@example.com",
  "message": "Your message here"
}
```

**Response:**
```json
{
  "message": "Saved successfully!"
}
```

**Error Response (500):**
```json
{
  "message": "Error saving data"
}
```

## Database Schema

The `Contact` model has the following structure:

```javascript
{
  name: String,
  email: String,
  message: String
}
```

## Dependencies

- **express** (^5.2.1) - Web application framework
- **mongoose** (^9.4.1) - MongoDB object modeling
- **body-parser** (^2.2.2) - Request body parsing middleware
- **cors** (^2.8.6) - Cross-Origin Resource Sharing middleware

## Configuration

- **Server Port**: 5000
- **MongoDB Connection**: `mongodb://127.0.0.1:27017/portfolioDB`
- **Frontend Path**: `public/` (served as static files)

## Usage

1. Navigate to `http://localhost:5000` in your browser
2. View the portfolio website for Pallavi More
3. Fill out the contact form and submit
4. The message will be saved to MongoDB automatically

## Portfolio Sections

- **Home**: Introduction with profile photo
- **About**: Background and interests
- **Skills**: Technical skills showcase
- **Resume**: Qualifications and experience
- **Projects**: Portfolio projects
- **Contact**: Contact form for visitors

## Error Handling

- If MongoDB connection fails, an error message is logged to the console
- If contact form submission fails, a 500 status response is sent
- Console logs provide debugging information for development

## Future Enhancements

- Add form validation on the frontend and backend
- Implement authentication for admin dashboard
- Add email notifications when forms are submitted
- Create an admin panel to view submitted contacts
- Add more portfolio sections
- Implement responsive design improvements

## Notes

- Make sure MongoDB is running before starting the server
- The Contact model schema could be enhanced with timestamps and additional validation
- Consider adding environment variables for sensitive configuration

## Author

Created as Assignment 5 for full-stack development coursework
