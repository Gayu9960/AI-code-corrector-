const express = require("express");
require("dotenv").config();
const cors = require("cors");
const aiRoutes = require("./src/routes/ai.routes");

const app = express();

// Middleware
app.use(cors({
  origin: "*"   // later you can replace with Vercel URL
}));

app.use(express.json());

// Routes
app.use("/ai", aiRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// IMPORTANT FIX FOR RENDER
const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
