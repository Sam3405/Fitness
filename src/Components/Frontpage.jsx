import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function FrontPage() {
    return (
        <div className="front-page">
            {/* Hero Section */}
            <header className="hero-section text-center text-dark d-flex align-items-center justify-content-center">
                <div className="container">
                    <h1 className="display-3  fw-bold">Welcome to NutriFit Hub</h1>
                    <p className="lead">Track your nutrition, stay fit, and achieve your health goals effortlessly!</p>
                    <Link to="/home" className="btn btn-primary btn-lg mt-3">Get Started 🚀</Link>
                </div>
            </header>

            {/* Features Section */}
            <section className="features py-5 text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card shadow-sm p-4">
                                <i className="fas fa-fire fa-3x text-danger mb-3"></i>
                                <h3>Calorie Tracking</h3>
                                <p>Accurately calculate your daily calorie needs based on height, weight, age, and activity level.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow-sm p-4">
                                <i className="fas fa-dumbbell fa-3x text-primary mb-3"></i>
                                <h3>Personalized Workouts</h3>
                                <p>Get tailored exercise suggestions based on your fitness level and goals.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow-sm p-4">
                                <i className="fas fa-apple-alt fa-3x text-success mb-3"></i>
                                <h3>Healthy Meal Plans</h3>
                                <p>Discover nutrition-rich meal plans that help you stay in shape.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer text-center py-4 bg-dark text-white">
                <p className="mb-0">© 2025 NutriFit Hub | Designed by Suhail & Sourabh</p>
                <p>Follow us: 
                    <a href="#" className="text-white ms-2"><i className="fab fa-facebook"></i></a>
                    <a href="#" className="text-white ms-2"><i className="fab fa-twitter"></i></a>
                    <a href="#" className="text-white ms-2"><i className="fab fa-instagram"></i></a>
                </p>
            </footer>
        </div>
    );
}

export default FrontPage;
