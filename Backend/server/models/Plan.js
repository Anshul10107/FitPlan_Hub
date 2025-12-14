const mongoose = require("mongoose");

const planSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  duration: String,
  trainerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  trainerName: String
});

module.exports = mongoose.model("Plan", planSchema);
