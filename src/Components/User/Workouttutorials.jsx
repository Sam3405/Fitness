import React from 'react';
import { Link, Outlet,  } from 'react-router-dom';

function Workouttutorials() {
    return (
        <>
            
            <div className="container mt-3">
                <nav className="navbar navbar-expand-lg bg-white shadow-sm rounded">
                    <div className="container d-flex flex-wrap justify-content-center p-3">
                    <span className="nav-text mx-3 fw-bold">Video Tutorial</span>
                        <Link to={"/workout/routine"} className="nav-link mx-3">Routine </Link>
                        <Link to={"/workout/abs"} className="nav-link mx-3">Abs</Link>
                        <Link to={"/workout/arms"} className="nav-link mx-3">Arms</Link>
                        <Link to={"/workout/back"} className="nav-link mx-3">Back</Link>
                        <Link to={"/workout/chest"} className="nav-link mx-3">Chest</Link>
                        <Link to={"/workout/triceps"} className="nav-link mx-3">Triceps</Link>
                        <Link to={"/workout/shoulder"} className="nav-link mx-3">Shoulder</Link>
                        <Link to={"/workout/legs"} className="nav-link mx-3">Legs</Link>
                    </div>
                </nav>


                <div className="container bg-warning mt-2 mb-5">
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
} export default Workouttutorials;