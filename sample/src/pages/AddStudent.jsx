import { useState } from "react";

function AddStudent() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [dept, setDept] = useState("");

  const addStudent = () => {
    const students = JSON.parse(localStorage.getItem("students")) || [];
    students.push({ id, name, dept });
    localStorage.setItem("students", JSON.stringify(students));
    alert("Student added");
  };

  return (
    <div className="container">
      <h2>Add Student</h2>
      <input placeholder="ID" onChange={e => setId(e.target.value)} />
      <input placeholder="Name" onChange={e => setName(e.target.value)} />
      <input placeholder="Department" onChange={e => setDept(e.target.value)} />
      <button onClick={addStudent}>Save</button>
    </div>
  );
}

export default AddStudent;
