const { Schema, model, Types } = require("mongoose");

const LikeSchema = new Schema(
  {
    user: { type: Types.ObjectId, required: true, ref: "User" },
    comment: { type: Types.ObjectId, required: true, ref: "Comment" },
  },
  { timestamp: true }
);

LikeSchema.virtual("users", {
  ref: "User",
  localField: "_id",
  foreignField: "user",
});

LikeSchema.virtual("comments", {
  ref: "Comment",
  localField: "_id",
  foreignField: "comments",
});

LikeSchema.set("toObject", { virtuals: true });
LikeSchema.set("toJSON", { virtuals: true });

const Like = model("Like", LikeSchema);
module.exports = { Like };
