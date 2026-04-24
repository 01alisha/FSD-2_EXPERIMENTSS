import { Outlet, Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <Link to="profile">Profile</Link> | 
      <Link to="settings">Settings</Link>

      <Outlet />
    </div>
  );
}