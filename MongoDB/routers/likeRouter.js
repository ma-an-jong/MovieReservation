const express = require("express");
const router = express.Router();
const { Like } = require("../model/like");

router.post("/", async (req, res) => {
  const like = new Like(req.body);
  await like.save();
  return res.send({ like });
});

router.get("/:commentId", async (req, res) => {
  const { commentId } = req.params;
  const likes = await Like.find({ comment: commentId });
  return res.send({ likes });
});

router.delete("/:likeId", async (req, res) => {
  const { likeId } = req.params;
  const like = await Like.find({ _id: likeId });

  if (!like) {
    return res.status(404).send("likeid not fount ");
  }

  await Like.deleteOne({ _id: likeId });

  return res.send({ like });
});

module.exports = router;
