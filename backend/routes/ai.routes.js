const express = require("express");
const router = express.Router();

const {
  generateSummary
} = require("../controllers/ai.controller");

router.post("/generate-summary", generateSummary);

module.exports = router;
