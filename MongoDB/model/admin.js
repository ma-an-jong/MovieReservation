const { Schema, model, Types } = require("mongoose");

const AdminSchema = new Schema(
  {
    user: { type: Types.ObjectId, required: true, ref: "User" },
  },
  { timestamp: true }
);

// AdminSchema.virtual("users", {
//   ref: "User",
//   localField: "_id",
//   foreignField: "user",
// });

// AdminSchema.set("toObject", { virtuals: true });
// AdminSchema.set("toJSON", { virtuals: true });

const Admin = model("Admin", AdminSchema);
module.exports = { Admin };
