const router = require("express").Router();
const Plan = require("../models/Plan");
const auth = require("../middleware/authMiddleware");

router.post("/create", auth, async (req, res) => {
  if (req.user.role !== "trainer")
    return res.status(403).json({ message: "Access denied" });

  const plan = await Plan.create(req.body);
  res.json(plan);
});

module.exports = router;
