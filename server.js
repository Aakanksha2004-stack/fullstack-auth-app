const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

const app = express();
app.use(express.json());

// Routes
const authRoutes = require("./routes/authRoutes");
const errorHandler = require("./middleware/errorHandler");

app.get("/api", (req, res) => {
  res.send("API running 🚀");
});

app.use("/api/auth", authRoutes);

// ✅ Serve frontend build
app.use(express.static(path.join(__dirname, "frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend/dist/index.html"));
});

// Error handler (KEEP LAST)
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

async function start() {
  try {
    if (!MONGO_URI) {
      throw new Error("MONGO_URI is missing in .env");
    }

    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected successfully");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

start();