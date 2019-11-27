const Comments = require("./schemaComments");

const createComment = async (req, res) => {
  try {
    const newComment = new Comments(req.body);
    const createNewComment = await newComment.save();
    res.status(201).json({ status: "success", comment: createNewComment });
  } catch (err) {
    res.status(500).json(err);
  }
};

const getComments = async (req, res) => {
  try {
    const findComment = await Comments.find({ product: req.query.productId });
    res.status(200).json({ status: "success", comments: findComment });
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteCommentById = async (req, res) => {
  try {
    await Comments.findById(req.params.id).deleteOne();
    res.status(200).json("Comment was deleted!");
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { createComment, getComments, deleteCommentById };
