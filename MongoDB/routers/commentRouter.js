const express = require("express");
const router = express.Router();
const { Comment } = require("../model/comment");

router.post("/comment", async (req, res) => {
  const comment = new Comment(req.body);
  await comment.save();
  return res.send({ comment });
});

module.exports = router;
