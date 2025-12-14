const router = require("express").Router();
const Plan = require("../models/Plan");
const User = require("../models/User");
const auth = require("../middleware/auth");
const role = require("../middleware/role");

// Create plan (trainer only)
router.post("/", auth, role("trainer"), async (req, res) => {
  const plan = await Plan.create({
    ...req.body,
    trainerId: req.user.id,
    trainerName: req.user.name
  });
  res.json(plan);
});

// Get all plans (preview)
router.get("/", async (req, res) => {
  const plans = await Plan.find({}, "title trainerName price");
  res.json(plans);
});

// Get plan details (preview or full)
router.get("/:id", auth, async (req, res) => {
  const plan = await Plan.findById(req.params.id);
  const user = await User.findById(req.user.id);

  if (!user.subscribedPlans.includes(plan._id)) {
    return res.json({
      title: plan.title,
      trainerName: plan.trainerName,
      price: plan.price
    });
  }

  res.json(plan);
});

// Update plan
router.put("/:id", auth, role("trainer"), async (req, res) => {
  const plan = await Plan.findById(req.params.id);
  if (plan.trainerId.toString() !== req.user.id)
    return res.status(403).json({ message: "Forbidden" });

  Object.assign(plan, req.body);
  await plan.save();
  res.json(plan);
});

// Delete plan
router.delete("/:id", auth, role("trainer"), async (req, res) => {
  const plan = await Plan.findById(req.params.id);
  if (plan.trainerId.toString() !== req.user.id)
    return res.status(403).json({ message: "Forbidden" });

  await plan.deleteOne();
  res.json({ message: "Deleted" });
});

module.exports = router;
