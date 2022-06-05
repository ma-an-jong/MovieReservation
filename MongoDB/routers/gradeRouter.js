const express = require("express");
const router = express.Router();
const { Grade } = require("../model/grade");

router.post("/grade", async (req, res) => {
  const grade = new Grade(req.body);
  await grade.save();
  return res.send({ grade });
});

module.exports = router;
