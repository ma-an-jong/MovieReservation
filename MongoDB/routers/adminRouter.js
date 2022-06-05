const express = require("express");
const router = express.Router();
const { Admin } = require("../model/admin");

router.post("/admin", async (req, res) => {
  const admin = new Admin(req.body);
  await admin.save();
  return res.send({ admin });
});

module.exports = router;
