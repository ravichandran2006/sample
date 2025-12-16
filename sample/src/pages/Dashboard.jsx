import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2>Dashboard</h2>
      <button onClick={() => navigate("/add")}>Add Student</button>
      <button onClick={() => navigate("/view")}>View Students</button>
      <button onClick={() => navigate("/")}>Logout</button>
    </div>
  );
}

export default Dashboard;
