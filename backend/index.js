const express = require("express");
require("dotenv").config();
const cors = require("cors");
const aiRoutes = require("./src/routes/ai.routes");

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());

app.use("/ai", aiRoutes);

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});