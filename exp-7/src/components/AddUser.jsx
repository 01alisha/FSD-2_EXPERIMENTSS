import { useState } from "react";
import axios from "axios";

export default function AddUser({ setUsers }) {
  const [name, setName] = useState("");

  const handleSubmit = async () => {
    if (!name) {
      alert("Please enter name");
      return;
    }

    try {
      const res = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        { name }
      );

      // ✅ Add to UI manually
      setUsers((prev) => [...prev, res.data]);

      setName(""); // clear input
      alert("User added");
    } catch {
      alert("Error adding user");
    }
  };

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
      <button onClick={handleSubmit}>Add User</button>
    </div>
  );
}