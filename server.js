const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors"); // 👈 ADD THIS

dotenv.config();

const app = express();

// ✅ CORS FIX (VERY IMPORTANT)
app.use(cors({
  origin: "https://fullstack-auth-app-1-kcbr.onrender.com", // 👈 your frontend URL
  credentials: true
}));

app.use(express.json());

// Routes
const authRoutes = require("./routes/authRoutes");
const errorHandler = require("./middleware/errorHandler");

app.get("/api", (req, res) => {
  res.send("API running 🚀");
});

app.use("/api/auth", authRoutes);

// Error handler (always last)
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

async function start() {
  try {
    if (!MONGO_URI) throw new Error("MONGO_URI missing");

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