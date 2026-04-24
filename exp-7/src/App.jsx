import { useState } from "react";
import AddUser from "./components/AddUser";
import Users from "./components/Users";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  const [users, setUsers] = useState([]);

  return (
    <ErrorBoundary>
      <h1>API Integration</h1>

      <AddUser setUsers={setUsers} />
      <Users users={users} setUsers={setUsers} />
    </ErrorBoundary>
  );
}

export default App;