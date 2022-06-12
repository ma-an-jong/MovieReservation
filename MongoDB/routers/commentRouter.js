const express = require("express");
const router = express.Router();
const { Comment } = require("../model/comment");

router.post("/", async (req, res) => {
  const comment = new Comment(req.body);
  await comment.save();
  return res.send({ comment });
});

router.get("/:movieId", async (req, res) => {
  try {
    let { movieId } = req.params;
    const comments = await Comment.find({ movie: movieId });
    res.send(comments);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
});

module.exports = router;
