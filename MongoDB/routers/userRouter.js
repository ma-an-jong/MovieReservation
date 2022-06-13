const express = require("express");
const router = express.Router();
const { User } = require("../model/user");

router.post("/", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  return res.send({ user });
});

router.get("/:userId", async (req, res) => {
  const { userId } = req.params;
  const user = await User.findById({ userId });

  res.send({ name: user.user_name, id: user.login_id });
});

module.exports = router;
