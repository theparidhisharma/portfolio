const gallery = require("../data/gallery.json");

exports.getGallery = (req, res) => {
  // IMPORTANT: algorithm stays FRONTEND
  // Backend provides ordered data only
  res.json(gallery);
};
