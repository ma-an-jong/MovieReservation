const express = require("express");
const router = express.Router();
const { Like } = require("../model/like");

router.post("/like", async (req, res) => {
  const like = new Like(req.body);
  await like.save();
  return res.send({ like });
});

module.exports = router;
