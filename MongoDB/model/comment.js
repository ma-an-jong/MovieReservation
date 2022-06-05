const { Schema, model, Types } = require("mongoose");

const CommentSchema = new Schema(
  {
    context: { type: String, required: true },
    user: { type: Types.ObjectId, required: true, ref: "User" },
    movie: { type: Types.ObjectId, required: true, ref: "Movie" },
    date: { type: Date, default: new Date() },
    likes: { type: Number, default: 0 },
  },
  { timestamp: true }
);

CommentSchema.virtual("users", {
  ref: "User",
  localField: "_id",
  foreignField: "user",
});

CommentSchema.virtual("movies", {
  ref: "Movie",
  localField: "_id",
  foreignField: "movie",
});

CommentSchema.set("toObject", { virtuals: true });
CommentSchema.set("toJSON", { virtuals: true });

const Comment = model("Comment", CommentSchema);
module.exports = { Comment };
