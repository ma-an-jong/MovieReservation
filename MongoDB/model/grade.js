// const { Schema, model, Types } = require("mongoose");

// const GradeSchema = new Schema(
//   {
//     user: { type: Types.ObjectId, required: true, ref: "User" },
//     movie: { type: Types.ObjectId, required: true, ref: "Movie" },
//   },
//   { timestamp: true }
// );

// GradeSchema.virtual("users", {
//   ref: "User",
//   localField: "_id",
//   foreignField: "user",
// });

// GradeSchema.virtual("movies", {
//   ref: "Movie",
//   localField: "_id",
//   foreignField: "movie",
// });

// GradeSchema.set("toObject", { virtuals: true });
// GradeSchema.set("toJSON", { virtuals: true });

// const Grade = model("Grade", GradeSchema);
// module.exports = { Grade };
