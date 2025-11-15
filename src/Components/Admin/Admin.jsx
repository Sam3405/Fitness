import React, { useContext, useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../AuthContext';

function Admin() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [adminId, setAdminId] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { admin } = useContext(AuthContext);
    

    // useEffect(() => {
    //     // Check if admin is already logged in
    //     const adminToken = localStorage.getItem("adminToken");
    //     if (adminToken) {
    //         setIsAuthenticated(true);
    //         admin(isAuthenticated);
    //     }
    // }, []);

    const handleLogin = () => {
        // Hardcoded credentials (replace with real backend authentication)
        const validAdminId = "admin";
        const validPassword = "admin";

        if (adminId === validAdminId && password === validPassword) {
            localStorage.setItem("adminToken", "authenticated");
            setIsAuthenticated(true);
            setError("");
        } else {
            setError("Invalid Admin ID or Password.");
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("adminToken");
        setIsAuthenticated(false);
        setAdminId("");
        setPassword("");
    };

    if (!isAuthenticated) {
        return (
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="card p-4 shadow-lg" style={{ width: "350px" }}>
                    <h3 className="text-center mb-3">Admin Login</h3>
                    {error && <div className="alert alert-danger p-2">{error}</div>}
                    <div className="mb-3">
                        <label className="form-label">Admin ID</label>
                        <input
                            type="text"
                            className="form-control"
                            value={adminId}
                            onChange={(e) => setAdminId(e.target.value)}
                            placeholder="Enter Admin ID"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter Password"
                        />
                    </div>
                    <button className="btn btn-primary w-100" onClick={handleLogin}>
                        Login
                    </button>
                </div>
            </div>
        );
    }

   
    return (
        <>
            <div className="d-flex">
                {/* Sidebar */}
                <nav className="bg-dark navbar-expand-lg shadow-sm rounded text-white vh-100 p-3" style={{ width: "250px" }}>
                    <h4 className="text-center">Admin Panel</h4><br></br>
                    <ul className="nav flex-column">
                        <Link to="/adminlogin/dash" className="nav-link">
                            Dashboard
                        </Link>
                        <Link to={"/adminlogin/manage"} className="nav-link">
                           Manage Users
                        </Link>
                        <Link to={"/adminlogin/feedback"} className="nav-link">
                            User Feedback
                        </Link>
                        <li className="nav-item">
                            <button className="btn btn-danger w-100 mt-3" onClick={handleLogout}>Logout</button>
                        </li>
                    </ul>
                </nav>

                {/* Main Content */}
                <div className="p-4 w-100">
                   <Outlet/>
                </div>
            </div>
             {/* Inline Styling */}
             <style>
                {`
                    .nav-link {
                        font-size: 16px;
                        font-weight: 500;
                        transition: all 0.3s ease-in-out;
                    }
                    
                    .nav-link:hover {
                        color: #007bff !important;
                        transform: scale(1.05);
                    }
                    
                    .active-link {
                        color: #fff !important;
                        background-color: #007bff;
                        font-weight: bold;
                    }
                    
                    .navbar {
                        border-radius: 6px;
                        padding: 6px;
                    }
                `}
            </style>
        </>
        
    );
} export default Admin;