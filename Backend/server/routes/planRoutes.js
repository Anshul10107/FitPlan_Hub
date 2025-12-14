router.get("/seed", async (req, res) => {
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
      description: "Fat loss cardio + strength",
      level: "Intermediate",
      duration: "6 Weeks"
    },
    {
      title: "Muscle Gain Plan",
      description: "Hypertrophy focused training",
      level: "Advanced",
      duration: "8 Weeks"
    }
  ]);

  res.json(plans);
});
