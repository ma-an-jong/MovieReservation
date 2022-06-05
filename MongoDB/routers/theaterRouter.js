const express = require("express");
const router = express.Router();
const { Theater } = require("../model/theater");

router.post("/theater", async (req, res) => {
  const theater = new Theater(req.body);
  await theater.save();
  return res.send({ theater });
});

module.exports = router;
