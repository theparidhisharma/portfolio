const path = require("path");
const fs = require("fs");

const dataPath = path.resolve(__dirname, "..", "data", "linkedinPosts.json");

const getLinkedinPosts = (req, res) => {
  try {
    console.log("📂 Reading file from:", dataPath);

    const rawData = fs.readFileSync(dataPath, "utf-8");
    const posts = JSON.parse(rawData);

    res.status(200).json(posts);
  } catch (error) {
    console.error("❌ Error reading LinkedIn posts:", error.message);
    res.status(500).json({ message: "Failed to fetch LinkedIn posts" });
  }
};

module.exports = { getLinkedinPosts };
