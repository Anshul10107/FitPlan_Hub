import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";

export default function UserFeed() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    API.get("/users/feed").then(res => setPlans(res.data));
  }, []);

  return (
    <>
      <Navbar />
      <h1 className="title">Your Feed</h1>
      <div className="grid">
        {plans.map(p => (
          <div className="card" key={p._id}>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
