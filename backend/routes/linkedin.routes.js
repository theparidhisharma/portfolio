const express = require("express");
const router = express.Router();

const {
  getLinkedinPosts
} = require("../controllers/linkedin.controller");

router.get("/", getLinkedinPosts);

module.exports = router;
