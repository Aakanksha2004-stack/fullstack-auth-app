🔐 Full Stack Authentication App

A production-ready full-stack authentication system with secure user registration, login, and protected routes. Built using modern web technologies and deployed on the cloud.



 🚀 Live Demo

👉 https://fullstack-auth-app-qcvb.onrender.com
<img width="1919" height="1027" alt="image" src="https://github.com/user-attachments/assets/3d14943e-26de-42b2-8b07-68e77e9eba34" />
<img width="1918" height="1020" alt="image" src="https://github.com/user-attachments/assets/58b01081-51fe-4051-879e-0d525bcf3960" />


---

## ✨ Features

* User Registration (Signup)
* Secure Login with JWT Authentication
* Protected Routes (Dashboard)
* Persistent Authentication (token-based)
* Logout functionality
* Centralized error handling
* Fully deployed (Frontend + Backend)

---

## 🛠️ Tech Stack

**Frontend**

* React (Vite)
* Tailwind CSS
* Fetch API

**Backend**

* Node.js
* Express.js
* MongoDB (Mongoose)
* JSON Web Tokens (JWT)

**Deployment**

* Render (Full-stack hosting)

---

## 📁 Project Structure

```
root/
│
├── frontend/           # React frontend (Vite)
│   ├── src/
│   ├── dist/
│   └── .env
│
├── controllers/        # Business logic
├── routes/             # API routes
├── models/             # MongoDB models
├── middleware/         # Auth & error handling
│
├── server.js           # Backend entry point
├── package.json
└── .env
```

---

## ⚙️ Getting Started

### 1. Clone the Repository

```
git clone https://github.com/your-username/fullstack-auth-app.git
cd fullstack-auth-app
```

---

### 2. Install Backend Dependencies

```
npm install
```

---

### 3. Configure Environment Variables

Create a `.env` file in the root:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

### 4. Run Backend Server

```
npm start
```

---

### 5. Setup Frontend

```
cd frontend
npm install
npm run dev
```

---

## 🔐 API Endpoints

| Method | Endpoint           | Description        |
| ------ | ------------------ | ------------------ |
| POST   | /api/auth/register | Register new user  |
| POST   | /api/auth/login    | Authenticate user  |
| GET    | /api/auth/me       | Get logged-in user |

---

## 🧪 Testing

You can:

* Register via UI
* Login via UI
* Or test APIs using Postman

---

## 📌 Future Improvements

* Refresh Token Authentication
* Secure Cookies (httpOnly)
* Role-based Authorization
* Improved UI/UX
* Toast Notifications

---

👩‍💻 Author

Aakanksha Sharma

* GitHub: https://github.com/Aakanksha2004-stack
* LinkedIn: https://www.linkedin.com/in/aakanksha-sharma-7628b329b/

---

## ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub!
