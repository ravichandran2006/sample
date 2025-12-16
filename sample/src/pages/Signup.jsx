import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signup = () => {
    if (!username || !password) {
      alert("Please fill all fields");
      return;
    }

    localStorage.setItem("user", JSON.stringify({ username, password }));

    navigate("/dashboard");   // ✅ DIRECT TO DASHBOARD
  };

  return (
    <div className="container">
      <h2>Signup</h2>

      <input
        type="text"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={signup}>Signup</button>
    </div>
  );
}

export default Signup;
