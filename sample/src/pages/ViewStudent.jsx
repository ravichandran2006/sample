import { useEffect, useState } from "react";

function ViewStudent() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("students")) || [];
    setStudents(data);
  }, []);

  return (
    <div className="container">
      <h2>Student List</h2>
      <ul>
        {students.map((s, i) => (
          <li key={i}>
            {s.id} - {s.name} - {s.dept}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ViewStudent;
