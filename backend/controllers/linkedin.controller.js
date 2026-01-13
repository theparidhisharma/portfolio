import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_FILE = path.join(__dirname, '../data/linkedinPosts.json');

export const getPosts = (req, res) => {
  try {
    const data = fs.readFileSync(DATA_FILE, 'utf8');
    const posts = JSON.parse(data);
    res.json(posts);
  } catch (error) {
    console.error("Error reading LinkedIn data:", error);
    res.status(500).json({ message: "Failed to load posts" });
  }
};