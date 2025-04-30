import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Login from "./components/Login";
import Signup from "./components/Signup";
import BlogList from "./components/BlogList";
import AdminDashboard from "./components/AdminDashboard";
import ProtectedRoute from "./routes/ProtectedRoute";

import './App.css';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/admin">Admin Dashboard</Link>
      </nav>

      <div className="container">
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
      </div>

      {/* Toast notifications */}
      <ToastContainer position="top-center" autoClose={3000} />
    </Router>
  );
}

export default App;
