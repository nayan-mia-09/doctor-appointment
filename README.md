# 🩺 Doctor Appointment System

A full-stack Doctor Appointment Booking System that allows patients to book appointments with doctors online while enabling admins and doctors to manage schedules, appointments, and users efficiently.

🔗 Repository:  
https://github.com/nayan-mia-09/doctor-appointment

---

## 🚀 Project Overview

The Doctor Appointment System is a modern healthcare web application built using the MERN Stack.  
It simplifies the appointment booking process between patients and doctors through an intuitive and responsive interface.

---

## 🏗️ Project Structure

```
doctor-appointment/
│
├── frontend/     → Patient Website (User Panel)
├── backend/      → API & Database Server
├── admin/        → Admin Dashboard
└── README.md
```

---

## ⚙️ Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Axios
- React Router

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- REST API

### Admin Panel
- React.js
- Dashboard Management

---

## ✨ Features

### User Features
- User registration & login
- Browse available doctors
- Book appointments
- View appointment history
- Responsive UI

### Admin Features
- Admin authentication
- Manage doctors
- View appointments
- Approve / cancel bookings
- Dashboard management

---

## 🔑 Authentication

- JWT-based Authentication
- Protected Routes
- Role-based Access Control

---

## 📦 Installation & Setup

### 1. Clone Repository

```bash
git clone https://github.com/nayan-mia-09/doctor-appointment.git
cd doctor-appointment
```

---

### 2. Backend Setup

```bash
cd backend
npm install
npm run dev
```

Create `.env` file inside backend folder:

```
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
```

---

### 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

### 4. Admin Panel Setup

```bash
cd admin
npm install
npm run dev
```

---

## 🌍 Environment Variables

Create a `.env` file inside the **backend** folder and add the following variables:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key

CLOUDINARY_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key
```

---

## 🎯 Future Improvements

- Online Payment Integration
- Email Notifications
- Doctor Availability Calendar
- Video Consultation
- Patient Medical History

---

## 👨‍💻 Author

Nayan Mia  
GitHub: https://github.com/nayan-mia-09

---

## ⭐ Support

If you like this project:

- Star the repository
- Fork the project
- Share feedback

---

## 📄 License

This project is licensed under the MIT License.
