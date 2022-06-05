const express = require("express");
const router = express.Router();
const { User } = require("../model/user");

router.post("/user", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  return res.send({ user });
});

module.exports = router;
