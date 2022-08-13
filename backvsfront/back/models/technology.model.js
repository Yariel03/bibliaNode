const mongoose = require("mongoose");
const { Schema } = mongoose;

const TechnologySchema = new Schema(
  {
    name: { type: String, required: true, maxlength: 50 },
    description: { type: String, required: true },
    logo: { type: String, required: true },
    tags: { type: Array, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Technology", TechnologySchema);
