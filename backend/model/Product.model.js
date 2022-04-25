const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const itemSchema = new Schema(
  {
    name: { type: "String", required: true },
    detail: { type: "String", required: true },
    cost:{ type: "Number", required: true},
    type: { type: "String", required: true },
    url: { type: "String", required: true },
    adjustment:{ type: "Number", required: true},
    love:{ type: "Number", required: true},
    id: { type: "Number", required: true },
    quantity: { type: "Number", required: true },
  },
  {
    timestamps: true,
  }
);
const exercises = mongoose.model("Product", itemSchema);
module.exports = exercises;
