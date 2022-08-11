const mongoose = require("mongoose");
const { Schema } = mongoose;

const BreakSchema = new Schema(
  {
    title: { type: String },
    link: { type: String },
  },
  { createdAt: true, updatedAt: true }
);

module.exports = mongoose.model("Cat", BreakSchema);
