const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");

dotenv.config();

const app = express();

// ✅ FIXED CORS (IMPORTANT)
app.use(cors({
  origin: "https://fullstack-auth-app-qcvb.onrender.com",
  credentials: true,
}));

// ✅ handle preflight
app.options("*", cors());

app.use(express.json());

// Routes
const authRoutes = require("./routes/authRoutes");
const errorHandler = require("./middleware/errorHandler");

app.use("/api/auth", authRoutes);

// ✅ SERVE FRONTEND
app.use(express.static(path.join(__dirname, "frontend", "dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

// ❗ Error handler LAST
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

async function start() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

start();