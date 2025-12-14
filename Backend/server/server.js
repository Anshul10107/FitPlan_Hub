const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const planRoutes = require("./routes/planRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error(err));

app.use("/api/auth", authRoutes);
app.use("/api/plans", planRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => res.send("API Running"));

app.listen(5000, () => console.log("Server running on port 5000"));
