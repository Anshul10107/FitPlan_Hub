import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";

export default function PlanDetails() {
  const { id } = useParams();
  const [plan, setPlan] = useState(null);

  useEffect(() => {
    API.get(`/plans/${id}`).then(res => setPlan(res.data));
  }, [id]);

  const subscribe = async () => {
    await API.post(`/users/subscribe/${id}`);
    alert("Subscribed");
    window.location.reload();
  };

  if (!plan) return null;

  return (
    <div className="auth">
      <h3>{plan.title}</h3>
      <p>{plan.description || "Subscribe to view full details"}</p>
      <p>Price: ₹{plan.price}</p>
      {!plan.duration && <button onClick={subscribe}>Subscribe</button>}
    </div>
  );
}
