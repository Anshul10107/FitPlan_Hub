// const mongoose = require("mongoose");

// const planSchema = new mongoose.Schema({
//   title: String,
//   description: String,
//   price: Number,
//   duration: String,
//   trainer: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
// });

// module.exports = mongoose.model("Plan", planSchema);


const mongoose = require("mongoose");

const planSchema = new mongoose.Schema({
  title: String,
  description: String,
  level: String,
  duration: String,
  trainer: String
});

module.exports = mongoose.model("Plan", planSchema);

