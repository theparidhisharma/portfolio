const express = require("express");
const router = express.Router();

const { getLinkedinPosts } = require("../controllers/linkedin.controller");

// GET /api/linkedin
router.get("/", getLinkedinPosts);

module.exports = router;
