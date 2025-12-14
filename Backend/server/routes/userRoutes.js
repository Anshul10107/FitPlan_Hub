const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const User = require("../models/User");
const Plan = require("../models/Plan");

// Follow trainer
router.post("/follow/:trainerId", auth, async (req, res) => {
  await User.findByIdAndUpdate(req.user.id, {
    $addToSet: { followedTrainers: req.params.trainerId }
  });
  res.json({ message: "Followed" });
});

// Subscribe to plan (simulate payment)
router.post("/subscribe/:planId", auth, async (req, res) => {
  await User.findByIdAndUpdate(req.user.id, {
    $addToSet: { subscribedPlans: req.params.planId }
  });
  res.json({ message: "Subscribed" });
});

// Personalized feed
router.get("/feed", auth, async (req, res) => {
  const user = await User.findById(req.user.id);
  const plans = await Plan.find({
    trainerId: { $in: user.followedTrainers }
  });
  res.json(plans);
});

module.exports = router;
