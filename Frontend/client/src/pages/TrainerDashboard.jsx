import { useEffect, useState } from "react";
import { getUserRole } from "../utils/auth";
import API from "../services/api";
import Navbar from "../components/Navbar";

export default function TrainerDashboard() {
  const [plan, setPlan] = useState({});

  useEffect(() => {
    const role = getUserRole();
    if (role !== "trainer") {
      alert("Access denied: Trainers only");
      window.location.href = "/";
    }
  }, []);

  const createPlan = async () => {
    await API.post("/plans", plan);
    alert("Plan Created");
  };

  return (
    <>
      <Navbar />
      <div className="auth">
        <h3>Create Fitness Plan</h3>
        <input
          placeholder="Title"
          onChange={e => setPlan({ ...plan, title: e.target.value })}
        />
        <input
          placeholder="Description"
          onChange={e => setPlan({ ...plan, description: e.target.value })}
        />
        <input
          type="number"
          placeholder="Price"
          onChange={e => setPlan({ ...plan, price: e.target.value })}
        />
        <input
          placeholder="Duration (e.g. 30 days)"
          onChange={e => setPlan({ ...plan, duration: e.target.value })}
        />
        <button onClick={createPlan}>Create Plan</button>
      </div>
    </>
  );
}
