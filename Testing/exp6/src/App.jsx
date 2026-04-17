import { useState, useEffect } from "react";

function App() {
  const [name, setName] = useState("");
  const [students, setStudents] = useState([]);

  // Fetch students
  const fetchStudents = async () => {
    try {
      const res = await fetch("http://127.0.0.1:5000/students");
      const data = await res.json();
      setStudents(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name) {
      alert("Name required");
      return;
    }

    try {
      await fetch("http://127.0.0.1:5000/students", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      });

      setName("");
      fetchStudents();
      alert("Form submitted successfully!");
    } catch (err) {
      alert("Error connecting to backend");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      <h3>Students</h3>
      <ul>
        {students.map((s) => (
          <li key={s.id}>{s.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;