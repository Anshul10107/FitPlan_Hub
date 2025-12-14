import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";
import { getUserRole } from "../utils/auth";

export default function TrainerDashboard() {
  const [plan, setPlan] = useState({
    title: "",
    description: "",
    price: "",
    duration: ""
  });

  useEffect(() => {
    const role = getUserRole();
    if (role !== "trainer") {
      alert("Access denied. Trainers only.");
      window.location.href = "/";
    }
  }, []);

  const createPlan = async () => {
    try {
      await API.post("/plans", plan);
      alert("Plan created successfully");
      setPlan({ title: "", description: "", price: "", duration: "" });
    } catch (err) {
      alert("Error creating plan");
    }
  };

  return (
    <>
      <Navbar />
      <div className="auth">
        <h3>Create Fitness Plan</h3>

        <input
          placeholder="Title"
          value={plan.title}
          onChange={e => setPlan({ ...plan, title: e.target.value })}
        />

        <input
          placeholder="Description"
          value={plan.description}
          onChange={e => setPlan({ ...plan, description: e.target.value })}
        />

        <input
          type="number"
          placeholder="Price"
          value={plan.price}
          onChange={e => setPlan({ ...plan, price: e.target.value })}
        />

        <input
          placeholder="Duration (e.g. 30 days)"
          value={plan.duration}
          onChange={e => setPlan({ ...plan, duration: e.target.value })}
        />

        <button onClick={createPlan}>Create Plan</button>
      </div>
    </>
  );
}
