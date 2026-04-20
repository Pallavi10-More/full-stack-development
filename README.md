Student Feedback Review System (MERN Stack)

This is a full-stack web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js).
It allows students to submit feedback for courses and admins to review and manage feedback.

🚀 Tech Stack
Frontend: React.js
Backend: Node.js + Express.js
Database: MongoDB
Authentication: JWT
Password Security: bcryptjs
📁 Project Structure
assignment7/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   ├── server.js
│   └── .env.example
│
├── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   └── App.js
│
└── README.md
⚙️ Backend Setup
Open terminal in backend folder:
cd backend
Install dependencies:
npm install
Create .env file (copy from .env.example):
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/student_feedback_db
JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=1d
Run backend server:
npm run dev

Backend runs at:

http://localhost:5000
🌐 Frontend Setup
Open terminal in frontend folder:
cd frontend
Install dependencies:
npm install
Create .env file:
REACT_APP_API_URL=http://localhost:5000
Start frontend:
npm start

Frontend runs at:

http://localhost:3000
🔐 Authentication Features
User Registration (Student/Admin)
User Login with JWT
Password hashing using bcrypt
Role-based access control
🧑‍🎓 Student Features
Register and login
Submit feedback for courses
View submission confirmation
🧑‍💼 Admin Features
Login with admin role
View all feedback submissions
Filter feedback by course
Access protected dashboard
📡 API Endpoints
Auth Routes
POST /api/auth/register → Register user
POST /api/auth/login → Login user
Feedback Routes
POST /api/feedback → Submit feedback (student)
GET /api/feedback → Get all feedback (admin)
GET /api/feedback/:course → Filter by course
🔒 Environment Variables

Backend requires:

PORT
MONGODB_URI
JWT_SECRET
JWT_EXPIRES_IN
🛠️ How to Run Entire Project
1. Start MongoDB

Make sure MongoDB is running locally or use MongoDB Atlas.

2. Start Backend
cd backend
npm install
npm run dev
3. Start Frontend
cd frontend
npm install
npm start
⚠️ Important Notes
Do NOT upload .env to GitHub
.env.example is only for reference
Ensure backend is running before starting frontend
🎯 Future Improvements
Add charts for feedback analytics
Email notifications
Pagination for feedback list
Better UI with Material UI or Tailwind CSS
👨‍💻 Author

Built as part of a full-stack development assignment using MERN stack.