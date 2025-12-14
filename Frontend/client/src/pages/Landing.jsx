import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";

export default function Landing() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    API.get("/plans").then(res => setPlans(res.data));
  }, []);

  return (
    <>
      <Navbar />
      <h1 className="title">Available Plans</h1>
      <div className="grid">
        {plans.map(p => (
          <div className="card" key={p._id}>
            <h3>{p.title}</h3>
            <p>Trainer: {p.trainerName}</p>
            <p>Price: ₹{p.price}</p>
            <a href={`/plans/${p._id}`}>View Details</a>
          </div>
        ))}
      </div>
    </>
  );
}
