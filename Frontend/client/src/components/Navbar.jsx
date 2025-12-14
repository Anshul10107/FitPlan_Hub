import { Link } from "react-router-dom";
import { getUserRole } from "../utils/auth";

export default function Navbar() {
  const role = getUserRole();

  return (
    <nav className="navbar">
      <h2>FitPlanHub</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/feed">Feed</Link>

        {role === "trainer" && (
          <Link to="/trainer/dashboard">Trainer Dashboard</Link>
        )}

        {!role && <Link to="/login">Login</Link>}
        {!role && <Link to="/signup">Signup</Link>}
      </div>
    </nav>
  );
}
