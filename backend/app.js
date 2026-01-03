require("dotenv").config(); // 👈 MUST be line 1

const express = require("express");
const cors = require("cors");

const linkedinRoutes = require("./routes/linkedin.routes");
const aiRoutes = require("./routes/ai.routes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/linkedin", linkedinRoutes);
app.use("/api/ai", aiRoutes);

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

module.exports = app;
