const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(express.json());

const authRoutes = require("./routes/authRoutes");
const errorHandler = require("./middleware/errorHandler");

app.get("/", (req, res) => {
  res.send("API running 🚀");
});

app.use("/api/auth", authRoutes);
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

async function start() {
  try {
    if (!MONGO_URI) {
      throw new Error("MONGO_URI is missing in .env");
    }

    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected");

    app.use(errorHandler);

    app.listen(PORT, () => {
      console.log("Server running");
    });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

start();

