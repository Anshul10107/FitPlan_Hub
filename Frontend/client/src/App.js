import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import TrainerDashboard from "./pages/TrainerDashboard";
import PlanDetails from "./pages/PlanDetails";
import UserFeed from "./pages/UserFeed";
import TrainerProfile from "./pages/TrainerProfile";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/trainer/dashboard" element={<TrainerDashboard />} />
        <Route path="/plans/:id" element={<PlanDetails />} />
        <Route path="/feed" element={<UserFeed />} />
        <Route path="/trainer/:id" element={<TrainerProfile />} />
      </Routes>
    </BrowserRouter>
  );
}
