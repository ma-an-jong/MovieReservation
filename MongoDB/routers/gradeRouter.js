// const express = require("express");
// const router = express.Router();
// const { Grade } = require("../model/grade");

// router.post("/", async (req, res) => {
//   const grade = new Grade(req.body);
//   await grade.save();
//   return res.send({ grade });
// });

// router.get("/:movieId", async (req, res) => {
//   try {
//     let { movieId } = req.params;
//     const comments = await Comment.findById(movieId);
//     res.send(comments);
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({ error: error.message });
//   }
// });

// module.exports = router;
