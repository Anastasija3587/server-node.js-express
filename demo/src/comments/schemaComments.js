const mongoose = require("mongoose");
const { Schema } = mongoose;
const timestamp = require("../modules/db/middleware/timestamp");

const commentSchema = new Schema({
  product: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  mark: {
    type: Number,
    required: true
  }
});

commentSchema.plugin(timestamp);

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
