const mongoose = require("mongoose");

const tagsSchema = new mongoose.Schema({
  categorys: [String],
});

const Tags = mongoose.model("tags", tagsSchema);

module.exports = Tags;
