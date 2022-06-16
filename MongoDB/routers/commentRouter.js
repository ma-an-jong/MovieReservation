const express = require("express");
const router = express.Router();
const { Comment } = require("../model/comment");

router.post("/", async (req, res) => {
  console.log(req.body);
  const comment = new Comment(req.body.comment);
  await comment.save();
  return res.send({ comment });
});

router.get("/:movieId", async (req, res) => {
  try {
    let { movieId } = req.params;
    const comments = await Comment.find({ movie: movieId })
      .populate({ path: "user" })
      .populate({ path: "movie" });

    res.send(comments);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
});

module.exports = router;
