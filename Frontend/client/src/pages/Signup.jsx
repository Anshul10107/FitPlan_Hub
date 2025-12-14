import { useState } from "react";
import API from "../services/api";

export default function Signup() {
  const [form, setForm] = useState({ role: "user" });

  const signup = async () => {
    await API.post("/auth/signup", form);
    window.location.href = "/login";
  };

  return (
    <div className="auth">
      <h3>Signup</h3>
      <input placeholder="Name" onChange={e => setForm({ ...form, name: e.target.value })} />
      <input placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
      <input type="password" placeholder="Password" onChange={e => setForm({ ...form, password: e.target.value })} />
      <select onChange={e => setForm({ ...form, role: e.target.value })}>
        <option value="user">User</option>
        <option value="trainer">Trainer</option>
      </select>
      <button onClick={signup}>Signup</button>
    </div>
  );
}
