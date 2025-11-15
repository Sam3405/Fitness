import React from "react";
import { Link } from "react-router-dom";

function DietPlans() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm py-3">
        <div className="container">
          <Link to="/" className="navbar-brand fw-bold text-danger fs-3">
            NutriFit Hub
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link fw-semibold text-dark">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/register" className="nav-link fw-semibold text-dark">
                  Register
                </Link>
              </li>
            </ul>
            <Link to="/signin" className="ms-3">
              <button className="btn btn-danger px-4 fw-semibold">Sign In</button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default DietPlans;
