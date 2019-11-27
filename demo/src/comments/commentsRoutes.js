const { Router } = require("express");
const {
  createComment,
  getComments,
  deleteCommentById
} = require("./commentsController");

const router = Router();

router.post("/", createComment);
router.get("/", getComments);
router.delete("/:id", deleteCommentById);

module.exports = router;
