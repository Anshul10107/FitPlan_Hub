// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//   name: String,
//   email: { type: String, unique: true },
//   password: String,
//   role: { type: String, enum: ["user", "trainer"], default: "user" },
//   following: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }]
// });

// module.exports = mongoose.model("User", userSchema);


const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ["user", "trainer"], default: "user" }
});

module.exports = mongoose.model("User", userSchema);
