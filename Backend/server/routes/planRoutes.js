const router = require("express").Router();
const Plan = require("../models/Plan");
const auth = require("../middleware/auth");
const role = require("../middleware/role");

router.post("/", auth, role("trainer"), async (req, res) => {
  const plan = await Plan.create({
    ...req.body,
    trainerId: req.user.id,
    trainerName: req.user.name
  });
  res.json(plan);
});

router.put("/:id", auth, role("trainer"), async (req, res) => {
  const plan = await Plan.findById(req.params.id);
  if (plan.trainerId.toString() !== req.user.id)
    return res.status(403).json({ message: "Not your plan" });

  Object.assign(plan, req.body);
  await plan.save();
  res.json(plan);
});

router.delete("/:id", auth, role("trainer"), async (req, res) => {
  const plan = await Plan.findById(req.params.id);
  if (plan.trainerId.toString() !== req.user.id)
    return res.status(403).json({ message: "Not your plan" });

  await plan.deleteOne();
  res.json({ message: "Deleted" });
});
