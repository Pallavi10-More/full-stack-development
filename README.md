# Full Stack Development Assignments

This repository contains all assignments for the Full Stack Development course.

---

## 📌 Assignment 7: Student Feedback Review System (MERN Stack)

A full-stack web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js).
It allows students to submit feedback and admins to manage and review feedback.

---

### 🚀 Tech Stack

* Frontend: React.js
* Backend: Node.js + Express.js
* Database: MongoDB
* Authentication: JWT
* Security: bcryptjs

---

### 📁 Project Structure

```
assignment7/
├── backend/
├── frontend/
└── README.md
```

---

### ⚙️ Backend Setup

```bash
cd backend
npm install
npm run dev
```

---

### 🌐 Frontend Setup

```bash
cd frontend
npm install
npm start
```

---

### 🔐 Features

#### 🧑‍🎓 Student

* Register & Login
* Submit feedback

#### 🧑‍💼 Admin

* View all feedback
* Filter by course
* Dashboard access

---

### 📡 API Endpoints

**Auth**

* POST /api/auth/register
* POST /api/auth/login

**Feedback**

* POST /api/feedback
* GET /api/feedback
* GET /api/feedback/:course

---

### ⚠️ Notes

* Do NOT upload `.env`
* Use `.env.example`
* Start backend before frontend

---

### 🎯 Future Improvements

* Charts & analytics
* Email notifications
* Pagination
* UI improvements

---

## 📚 Other Assignments

### Assignment 1

* Student Table
* HTML Tags Table

### Assignment 2

* Portfolio Website

### Assignment 3

* E-Commerce Website

### Assignment 4

* Data Visualization Dashboard

### Assignment 5

* College / Travel / Insurance Website

### Assignment 6

* Appointment Booking / Used Items Portal


👨‍💻 Developed as part of Full Stack Development coursework.
