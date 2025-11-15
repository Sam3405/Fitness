import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";

function Login() {
    const { login } = useContext(AuthContext);
    const [formData, setFormData] = useState({ role: "user", email: "", password: "" });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    // List of authorized admin emails (this should ideally come from the backend)
    const adminEmails = ["admin@example.com", "admin2@example.com"];

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.email || !formData.password) {
            setError("Email and password are required.");
            return;
        }
        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            setError("Invalid email format.");
            return;
        }

        setError("");
        setSuccess("");
        setLoading(true);

        try {
            const response = await axios.get("https://66a8c558e40d3aa6ff595948.mockapi.io/Users");
            const users = response.data;

            const foundUser = users.find(
                (user) => user.email === formData.email && user.password === formData.password
            );

            if (foundUser) {
                let role = formData.role;

                // Override role if user is admin
                if (adminEmails.includes(formData.email)) {
                    role = "admin";
                }

                login({ ...foundUser, role }); // Store user data with role
                setSuccess("Login successful! Redirecting...");

                setTimeout(() => {
                    navigate(role === "admin" ? "/admin" : "/user");
                }, 1500);
            } else {
                setError("Invalid email or password.");
            }
        } catch (error) {
            setError("Login failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const [count, setcount] = useState("");
    function loaddata() {
        axios.get("https://66a8c558e40d3aa6ff595948.mockapi.io/Users").then((res) => {
            // setcount(res.data);    
            setcount(res.data.length);
        })

    }

    loaddata();
    return (
        <>
            <div className="justify-content-center mt-5 align-items-center">
                <h4>
                    Active Members: <span className="badge bg-success">{count}</span>
                </h4>
            </div>

            <div className="container d-flex justify-content-center align-items-center mt-5 mb-5">
                <div className="card shadow border-0 rounded-4 p-4 bg-danger bg-opacity-25 mb-5" style={{ width: "350px" }}>
                    <div className="card-header text-center bg-dark text-light rounded-3">
                        <h5 className="m-0">Login</h5> {/* Updated Header */}
                    </div>
                    <div className="card-body">
                        {error && <div className="alert alert-danger">{error}</div>}
                        {success && <div className="alert alert-success">{success}</div>}
                        <form onSubmit={handleSubmit}>
                            {/* Role Selection */}
                            <div className="mb-3">
                                <label className="form-label">Email Id</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter Email"
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Enter Password"
                                />
                            </div>
                            <button type="submit" className="btn btn-dark w-100" disabled={loading}>
                                {loading ? "Logging in..." : "Login"}
                            </button>
                        </form>
                    </div>

                </div>
            </div>

        </>

    );
}

export default Login;
