const express = require("express");
const cors = require("cors");

const linkedinRoutes = require("./routes/linkedin.routes");
const aiRoutes = require("./routes/ai.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/linkedin", linkedinRoutes);
app.use("/api/ai", aiRoutes);

module.exports = app;
