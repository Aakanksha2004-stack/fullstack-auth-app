🚀 Full Stack Authentication App

A clean and scalable **full-stack authentication system** built using **Node.js, Express, MongoDB (Mongoose), JWT, and React**.

---

## ✨ Features

* ⚡ Express server setup
* 🗄️ MongoDB connection using Mongoose
* 📁 Clean folder structure:

  ```
  models/
  routes/
  controllers/
  middleware/
  config/
  frontend/
  ```
* 👤 User model:

  * name
  * email
  * hashed password
* 🔐 Password hashing using **bcryptjs**
* 🔑 Authentication using **JWT (jsonwebtoken)**
* 🛡️ Protected routes
* ⚠️ Centralized error handling
* 🎨 Simple React frontend (Login + Signup + Dashboard)

---

## 📸 Screenshots

### 🔐 Login Page

<img width="1908" height="922" alt="image" src="https://github.com/user-attachments/assets/6d483b59-916f-41ac-b911-86c14d020da1" />


### 📊 Dashboard

<img width="1718" height="678" alt="image" src="https://github.com/user-attachments/assets/a3c9baa9-81b0-4e4c-afb6-3cbd46d78b48" />


---

## 📌 API Endpoints

### 📝 Register User

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

### 1️⃣ Clone the repository

```
git clone https://github.com/Aakanksha2004-stack/fullstack-auth-app.git
cd fullstack-auth-app
```

---

### 2️⃣ Install backend dependencies

```
npm install
```

---

### 3️⃣ Create `.env` file in root

```
MONGO_URI=mongodb://127.0.0.1:27017/express_auth_db
JWT_SECRET=your_super_secret_key
PORT=5000
```

---

### 4️⃣ Run backend

```
npm run dev
```

Backend runs on:
👉 http://localhost:5000

---

### 5️⃣ Setup frontend

```
cd frontend
npm install
npm run dev
```

Frontend runs on:
👉 http://localhost:5173

---

## 🧪 Testing

You can test APIs using:

* Postman
* Thunder Client
* cURL

---

## 🛠️ Tech Stack

* **Frontend:** React (Vite), Tailwind CSS
* **Backend:** Node.js, Express.js
* **Database:** MongoDB + Mongoose
* **Authentication:** JWT
* **Security:** bcryptjs

---

## 📌 Future Improvements

* 🔄 Refresh tokens
* 👥 Role-based authentication
* 📧 Email verification
* 🔐 Forgot/reset password
* 🌍 Deployment (Render + Netlify)

---

## 🌐 Live Demo (Coming Soon)

*(Add your deployed link here once live)*

---

 👩‍💻 Author

Aakanksha Sharma**

---

⭐ If you like this project

Give it a ⭐ on GitHub and feel free to contribute!
