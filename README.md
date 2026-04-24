# Express + MongoDB (Mongoose) + JWT Auth API

## Features
- Express server
- MongoDB connection using Mongoose
- Folder structure: `models/`, `routes/`, `controllers/`, `config/`, `middleware/`
- User model: `name`, `email`, `password` (hashed)
- Password hashing with `bcryptjs`
- JWT authentication with `jsonwebtoken`
- Routes:
  - `POST /api/auth/register`
  - `POST /api/auth/login`
  - `GET /api/auth/me` (protected)
- Centralized error handling

## Setup
1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file in the project root:

```env
MONGO_URI=mongodb://127.0.0.1:27017/express_auth_db
JWT_SECRET=replace_this_with_a_long_random_secret
PORT=5000
```

3. Start the server:

```bash
npm run dev
```

Server will run on `http://localhost:5000`.

## API Usage (example)
- Register: `POST http://localhost:5000/api/auth/register`

```json
{ "name": "Ada", "email": "ada@example.com", "password": "password123" }
```

- Login: `POST http://localhost:5000/api/auth/login`

```json
{ "email": "ada@example.com", "password": "password123" }
```

- Get current user: `GET http://localhost:5000/api/auth/me`
  - Add header: `Authorization: Bearer <token>`

