import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthContext";

function Header() {
    const { user, logout } = useContext(AuthContext);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setVisible(window.scrollY > 300);
        };
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <>
            {/* Scroll to Top Button */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="btn btn-danger position-fixed bottom-0 end-0 m-3 shadow"
                style={{ display: visible ? "block" : "none" }}>
                ↑ Top
            </button>

            {/* Navbar */}
            <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark shadow-sm py-3">
                <div className="container">
                    {/* Brand Logo */}
                    <Link to="/" className="navbar-brand fw-bold text-white">
                        Nutrifit <span className="text-danger">Hub</span>
                    </Link>

                    {/* Navbar Toggler (For Mobile) */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Navbar Links */}
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">



                            {!user ? (
                                <>
                                    <li className="nav-item">
                                        <Link to="/" className="nav-link">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/about" className="nav-link">About Us</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/contact" className="nav-link">Contact Us</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/register" className="nav-link">Register</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/login" className="btn btn-danger ms-3">Sign In</Link>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li className="nav-item">
                                        <Link to="/user" className="nav-link">Dashboard</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/workout/routine" className="nav-link">Work-Out</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/meals" className="nav-link">Meals</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/profile" className="nav-link">Profile</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/about" className="nav-link">About Us</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/contact" className="nav-link">Contact Us</Link>
                                    </li>
                                    <li className="nav-item">
                                        <button className="btn btn-danger ms-3" onClick={logout}>Logout</button>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;
