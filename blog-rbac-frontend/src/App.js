import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import BlogList from "./components/BlogList";
import AdminDashboard from "./components/AdminDashboard";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <Router>
      {/* Navigation Bar */}
      <nav style={{ padding: "1rem", background: "#f0f0f0", marginBottom: "2rem" }}>
        <Link to="/" style={{ marginRight: "1rem", textDecoration: "none" }}>Home</Link>
        <Link to="/login" style={{ marginRight: "1rem", textDecoration: "none" }}>Login</Link>
        <Link to="/signup" style={{ marginRight: "1rem", textDecoration: "none" }}>Signup</Link>
        <Link to="/admin" style={{ textDecoration: "none" }}>Admin Dashboard</Link>
      </nav>

      {/* Page Routing */}
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route 
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
