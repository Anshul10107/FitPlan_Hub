import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>FitPlanHub</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/feed">Feed</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
    </nav>
  );
}
