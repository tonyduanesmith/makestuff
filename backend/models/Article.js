const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  heading: String,
  subheading: String,
  created: Date,
  modified: Date,
  image_path: String,
  main_markdown: String,
  sidebar_markdown: String,
  tags: {
    category: [String],
  },
});

const Article = mongoose.model("article", articleSchema);

module.exports = Article;
