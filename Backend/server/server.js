const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const planRoutes = require("./routes/planRoutes");
const trainerRoutes = require("./routes/trainerRoutes");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb+srv://en22cs301158_db_user:gxG5LOwhmbaP1J0h@fitness.hb2u6oj.mongodb.net/?appName=fitness")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.use("/api/auth", authRoutes);
app.use("/api/plans", planRoutes);
app.use("/api/trainers", trainerRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


