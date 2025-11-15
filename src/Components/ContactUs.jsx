import axios from "axios";
import { useState } from "react";

function ContactUs() {
    const [data, setData] = useState({
        name: " ",
        email: " ",
        message: " ",
    })

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
        // console.log(data);
    };

    function handleSubmit(e){
        e.preventDefault();
        axios.post("https://66a8c558e40d3aa6ff595948.mockapi.io/feedbacks", data).then((res)=>{
            console.log(res.data);
            setData({
                name: " ",
                email: " ",
                message: " ",
            }) 
        })
    }

    return (
        <div className="container mt-5 mb-5">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <h2 className="fw-bold">Contact Us</h2>
                    <p className="text-muted">
                        At <strong>NutriFit Hub</strong>, we aim to empower individuals with smart, personalized health tools like nutrient calculators, protein guides, and fitness suggestions. Whether you're starting your wellness journey or looking to enhance it, we're here to support you. Have a question, feedback, or just want to connect? Drop us a message anytime!
                    </p>
                    <ul className="list-unstyled">
                        <li className="mb-2">
                            📍 123 Fitness Street, Wellness City, Fitland
                        </li>
                        <li className="mb-2">
                            📞 +91 9421701693 <br />
                            📞 +91 9112282446
                        </li>
                        <li className="mb-2">
                            ✉️ support@nutrifithub.com
                        </li>
                    </ul>
                </div>

                <div className="col-md-6">
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input value={data.name} name="name" onChange={handleChange} id="name" type="text" className="form-control" placeholder="Your Name" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" name="email" onChange={handleChange} id="email" value={data.email} className="form-control" placeholder="Your Email" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Message</label>
                            <textarea onChange={handleChange} name="message" value={data.message} id="message" className="form-control" rows="4" placeholder="Your Message"></textarea>
                        </div>
                        <button type="submit" onClick={handleSubmit} className="btn btn-primary w-100">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
