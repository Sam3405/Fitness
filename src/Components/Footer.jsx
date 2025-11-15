function Footer() {
    return (
        <footer className="bg-dark text-white py-5">
            <div className="container">
                <div className="row">
                    {/* Logo & Contact Info */}
                    <div className="col-md-4">
                        <h2 className="fw-bold">
                            Nutrifit <span className="text-danger">Hub</span>
                        </h2>
                        <p>Consistent effort leads to progress and success.</p>
                        <p>A balanced lifestyle leads to long-term happiness.</p>
                        {/* Social Media Icons */}
                        <div className="d-flex gap-3 fs-4 mt-3">
                            <a href="#" className="text-white"><i className="bi bi-facebook"></i></a>
                            <a href="#" className="text-white"><i className="bi bi-twitter"></i></a>
                            <a href="#" className="text-white"><i className="bi bi-instagram"></i></a>
                            <a href="#" className="text-white"><i className="bi bi-pinterest"></i></a>
                            <a href="#" className="text-white"><i className="bi bi-youtube"></i></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="col-md-4">
                        <h5 className="text-danger">Quick Links</h5>
                        <ul className="list-unstyled">
                            
                            <li><a href="/about" className="text-white text-decoration-none">About</a></li>
                            <li><a href="/" className="text-white text-decoration-none">Gallery</a></li>
                            <li><a href="/contact" className="text-white text-decoration-none">Contact</a></li>
                        </ul>
                    </div>

                    {/* Subscribe Section */}
                    <div className="col-md-4">
                        <h5 className="text-danger">Subscribe</h5>
                        <p>Stay updated with our latest offers and news.</p>
                        <div className="input-group">
                            <input type="email" className="form-control" placeholder="Enter your email" />
                            <button className="btn btn-danger">Subscribe</button>
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="text-center mt-4 border-top pt-3">
                    <p>Copyright &copy;2025 All rights reserved | This Website is made by 
                        <span className="text-danger"> Suhail and Sourabh</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
