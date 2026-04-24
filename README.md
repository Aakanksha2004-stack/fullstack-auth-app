🚀 Express + MongoDB + JWT Authentication API

A simple and clean backend authentication system built using **Node.js, Express, MongoDB (Mongoose), and JWT**.

✨ Features

* ⚡ Express server setup
* 🗄️ MongoDB connection using Mongoose
* 📁 Clean folder structure:

  ```
  models/
  routes/
  controllers/
  middleware/
  config/
  ```
  👤 User model with:

  * name
  * email
  * hashed password
* 🔐 Password hashing using **bcryptjs**
* 🔑 Authentication using **JWT (jsonwebtoken)**
* 🛡️ Protected routes
* ⚠️ Centralized error handling

---

📌 API Endpoints

📝 Register User

**POST** `/api/auth/register`

```json
{
  "name": "Ada",
  "email": "ada@example.com",
  "password": "password123"
}
```

---

### 🔐 Login User

**POST** `/api/auth/login`

```json
{
  "email": "ada@example.com",
  "password": "password123"
}
```

---

### 👤 Get Current User (Protected)

**GET** `/api/auth/me`

🔑 Requires Header:

```
Authorization: Bearer <your_token>
```

---

## ⚙️ Setup Instructions

### 1. Install dependencies

```
npm install
```

### 2. Create `.env` file in root

```
MONGO_URI=mongodb://127.0.0.1:27017/express_auth_db
JWT_SECRET=your_super_secret_key
PORT=5000
```

### 3. Run server

```
npm run dev
```

Server will run at:
👉 http://localhost:5000

---

## 🧪 Testing

You can test APIs using:

* Postman
* Thunder Client
* cURL

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB + Mongoose
* JWT (jsonwebtoken)
* bcryptjs

---

## 📌 Future Improvements

* Refresh tokens
* Role-based authentication
* Email verification
* Password reset feature
* Deployment (Render / Railway)

---

Author

Aakanksha Sharma
