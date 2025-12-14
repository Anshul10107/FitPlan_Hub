import { useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";

export default function TrainerDashboard() {
  const [plan, setPlan] = useState({});

  const createPlan = async () => {
    await API.post("/plans", plan);
    alert("Plan Created");
  };

  return (
    <>
      <Navbar />
      <div className="auth">
        <h3>Create Plan</h3>
        <input placeholder="Title" onChange={e => setPlan({ ...plan, title: e.target.value })} />
        <input placeholder="Description" onChange={e => setPlan({ ...plan, description: e.target.value })} />
        <input placeholder="Price" type="number" onChange={e => setPlan({ ...plan, price: e.target.value })} />
        <input placeholder="Duration" onChange={e => setPlan({ ...plan, duration: e.target.value })} />
        <button onClick={createPlan}>Create</button>
      </div>
    </>
  );
}
