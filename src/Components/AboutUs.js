import React from "react";

function AboutUs() {
    return (
        <div className="container my-5 py-5">
            {/* Header Section */}
            <div className="text-center mb-4">
                <h2 className="fw-bold text-danger fs-2">About Us</h2> {/* Smaller title */}
                <p className="text-secondary fs-5 fw-semibold">
                    Your ultimate destination for fitness, nutrition, and health tracking.
                </p>
            </div>

            {/* Who We Are Section */}
            <div className="row justify-content-center mb-4">
                <div className="col-md-10 text-center">
                    <h3 className="fw-bold text-dark fs-3">Who We Are</h3>
                    <p className="text-muted fs-5 fw-normal">
                        We are a team of fitness enthusiasts, nutrition experts, and tech professionals
                        dedicated to making fitness tracking simple and effective. Whether you're looking
                        to lose weight, build muscle, or maintain a healthy lifestyle, we provide the tools
                        and insights to help you stay on track.
                    </p>
                </div>
            </div>

            {/* What We Offer Section */}
            <div className="mt-4 p-4 rounded shadow-lg" style={{ backgroundColor: "#4169e1" }}>
                <h3 className="fw-bold text-center mb-3 text-dark fs-3">What We Offer</h3>
                <div className="row text-center">
                    {[
                        { title: "Calorie Tracker", text: "Track your daily intake and balance macros effectively." },
                        { title: "Personalized Diet Plans", text: "Meal recommendations based on your fitness goals." },
                        { title: "Workout Planner", text: "Structured workout plans with easy-to-follow tutorials." },
                        { title: "Food Logging", text: "Easily log your meals and get nutritional insights." }
                    ].map((item, index) => (
                        <div key={index} className="col-md-3 p-2">
                            <div className="p-3 border rounded card-custom">
                                <h5 className="fw-bold text-primary fs-5">{item.title}</h5>
                                <p className="fs-6 text-secondary fw-semibold">{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="mt-4 text-center">
                <h3 className="fw-bold text-dark fs-3">Why Choose Us?</h3>
                <ul className="list-unstyled text-muted fs-5 d-inline-block text-start fw-normal">
                    <li>✅ <strong>Science-Based Approach –</strong> Backed by research and expert knowledge.</li>
                    <li>✅ <strong>User-Friendly Interface –</strong> Simple and intuitive for effortless tracking.</li>
                    <li>✅ <strong>Comprehensive Solutions –</strong> Meal planning, workout tracking, and more.</li>
                </ul>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-4">
                <h4 className="fw-bold text-dark fs-4">
                    Join us today and take the first step toward a healthier, stronger you!
                </h4>
            </div>

            {/* Additional CSS for Styling */}
            <style>
                {`
                .card-custom {
                    background: white;
                    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
                    border: 2px solid #007bff;
                    font-weight: 500;
                }
                .card-custom:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 20px rgba(0, 123, 255, 0.3);
                }
                `}
            </style>
        </div>
    );
}

export default AboutUs;
