const express = require("express");
const router = express.Router();
const Plan = require("../models/Plan");

// GET all plans
router.get("/", async (req, res) => {
  try {
    const plans = await Plan.find();
    res.json(plans);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// SEED plans (for testing UI)
router.get("/seed", async (req, res) => {
  try {
    await Plan.deleteMany();

    const plans = await Plan.insertMany([
      {
        title: "Beginner Fitness Plan",
        description: "3-day workout plan for beginners",
        level: "Beginner",
        duration: "4 Weeks"
      },
      {
        title: "Weight Loss Program",
        description: "Fat loss cardio + strength training",
        level: "Intermediate",
        duration: "6 Weeks"
      },
      {
        title: "Muscle Gain Plan",
        description: "Hypertrophy focused strength training",
        level: "Advanced",
        duration: "8 Weeks"
      }
    ]);

    res.json(plans);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
