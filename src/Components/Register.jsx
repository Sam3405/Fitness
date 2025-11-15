import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
    const navigate = useNavigate();
const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: "",
    age: "",
    height: "",
    weight: "",
});

const [errors, setErrors] = useState({});
const [loading, setLoading] = useState(false);
const [successMessage, setSuccessMessage] = useState("");

const handleChange = (e) => {

    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
    
    setErrors({ ...errors, [e.target.name]: "" }); // Clear error when typing
};

const handleSubmit = async (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required.";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required.";
    if (!formData.email) {
        newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Enter a valid email.";
    }
    if (!formData.password) {
        newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
        newErrors.password = "Password must be at least 6 characters.";
    }
    if (!formData.gender) newErrors.gender = "Gender is required.";
    if (!formData.height)  newErrors.height = "height is required.";
    if (!formData.age) newErrors.age = "Age is required.";
    if (!formData.weight) newErrors.weight = "weight is required.";

    if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return; // Stop execution if there are validation errors
    }

    setErrors({});
    setSuccessMessage("");
    setLoading(true);

    try {
        await axios.post("https://66a8c558e40d3aa6ff595948.mockapi.io/Users", formData);
        setSuccessMessage("Registration successful! Redirecting to login...");
        setTimeout(() => {
            navigate("/login");
        }, 2000);
    } catch (error) {
        console.error("Registration error:", error);
        setErrors({ general: "Registration failed. Try again." });
    } finally {
        setLoading(false);
    }
};
    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card shadow border-0 rounded-4 bg-danger bg-opacity-75">
                        <div className="card-header bg-dark text-white text-center rounded-top-4">
                            <h4>Register Customer</h4>
                        </div>
                        <div className="card-body">
                            {successMessage && <div className="alert alert-success">{successMessage}</div>}
                            <form onSubmit={handleSubmit}>
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <label className="form-label">First Name</label>
                                        <input type="text" className={`form-control ${errors.firstName && "is-invalid"}`}
                                            name="firstName" value={formData.firstName} onChange={handleChange} />
                                        {errors.firstName && <div className="invalid-feedback text-warning">{errors.firstName}</div>}
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label">Last Name</label>
                                        <input type="text" className={`form-control ${errors.lastName && "is-invalid"}`}
                                            name="lastName" value={formData.lastName} onChange={handleChange} />
                                        {errors.lastName && <div className="invalid-feedback text-warning">{errors.lastName}</div>}
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <label className="form-label">Email ID</label>
                                        <input type="email" className={`form-control ${errors.email && "is-invalid"}`}
                                            name="email" value={formData.email} onChange={handleChange} />
                                        {errors.email && <div className="invalid-feedback text-warning">{errors.email}</div>}
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label">Password</label>
                                        <input type="password" className={`form-control ${errors.password && "is-invalid"}`}
                                            name="password" value={formData.password} onChange={handleChange} />
                                        {errors.password && <div className="invalid-feedback text-warning">{errors.password}</div>}
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <label className="form-label">User Gender</label>
                                        <select className={`form-select ${errors.gender && "is-invalid"}`}
                                            name="gender" value={formData.gender} onChange={handleChange}>
                                            <option value="">Select Gender</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                        </select>
                                        {errors.gender && <div className="invalid-feedback text-warning">{errors.gender}</div>}
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label">Age</label>
                                        <input type="number" className={`form-control ${errors.age && "is-invalid"}`}
                                            name="age" value={formData.age} onChange={handleChange} />
                                        {errors.age && <div className="invalid-feedback text-warning">{errors.age}</div>}
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <label className="form-label">weight</label>
                                        <input type="text" className={`form-control ${errors.pincode && "is-invalid"}`}
                                            name="weight" value={formData.weight} onChange={handleChange} />
                                        {errors.weight && <div className="invalid-feedback text-warning">{errors.weight}</div>}
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label">Height (in cm)</label>
                                        <input type="text" className={`form-control ${errors.city && "is-invalid"}`}
                                            name="height" value={formData.height} onChange={handleChange} />
                                        {errors.height && <div className="invalid-feedback text-warning">{errors.height}</div>}
                                    </div>
                                    {/* <div className="col-md-6">
                                            <label className="form-label">Street</label>
                                            <textarea className={`form-control ${errors.street && "is-invalid"}`}
                                                name="street" value={formData.street} onChange={handleChange}></textarea>
                                            {errors.street && <div className="invalid-feedback">{errors.street}</div>}
                                        </div> */}
                                </div>
                                <div className="text-center">
                                    <button type="submit" onClick={handleSubmit} className="btn btn-dark" disabled={loading}>
                                        {loading ? "Registering..." : "Register User"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
