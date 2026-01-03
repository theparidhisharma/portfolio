const fs = require("fs");
const path = require("path");

const dataPath = path.resolve(
  __dirname,
  "..",
  "data",
  "linkedinPosts.json"
);

const getLinkedinPosts = (req, res) => {
  try {
    const rawData = fs.readFileSync(dataPath, "utf-8");

    if (!rawData.trim()) {
      return res.json([]);
    }

    const posts = JSON.parse(rawData);
    res.json(posts);
  } catch (err) {
    console.error("LinkedIn posts error:", err.message);
    res.status(500).json({
      message: "Failed to fetch LinkedIn posts"
    });
  }
};

module.exports = { getLinkedinPosts };
