import API from "../services/api";
import { useParams } from "react-router-dom";

export default function TrainerProfile() {
  const { id } = useParams();

  const follow = async () => {
    await API.post(`/users/follow/${id}`);
    alert("Trainer followed");
  };

  return (
    <div className="auth">
      <h3>Trainer Profile</h3>
      <button onClick={follow}>Follow</button>
    </div>
  );
}
