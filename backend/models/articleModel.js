const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
    heading: {type: String, required: true},
    subheading: {type: String, required: true},
    created: {type: Date, required: true},
    modified: {type: Date, required: true},
    image_path: {type: String, required: true},
    main_markdown: {type: String, required: true},
    sidebar_markdown: {type: String}
});

const Article = mongoose.model("article", articleSchema);

module.exports = Article;