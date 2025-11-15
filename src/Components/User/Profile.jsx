import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../AuthContext';

function Profile() {
    const { user } = useContext(AuthContext); // Get user data
    const [newdata, setData] = useState([]);
    const Id = (user.id);

    const [showModal, setShowModal] = useState(false);

    function loaddata() {
        axios.get("https://66a8c558e40d3aa6ff595948.mockapi.io/Users/" + Id)
            .then((res) => {
                setData(res.data);
            })
    }

    function handleSubmit() {
        axios.put(`https://66a8c558e40d3aa6ff595948.mockapi.io/Users/${Id}`, newdata)
            .then((res) => {
                console.log(newdata);
            })
        setShowModal(false)
    }

    function handleChange(e) {
        setData({ ...newdata, [e.target.id]: e.target.value })
    }

    useEffect(() => {
        loaddata();
    }, []);


    // Styling
    const styles = {
        profileCard: {
            width: "500px",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            textAlign: "center",
            background: "#fff",
            marginBottom: "250px",


        },
        name: {
            fontSize: "20px",
            marginBottom: "10px"
        }
    };
    return (
        <>

            <div className='container mt-5'>
                <br />
                <br />
                <br />
                <div style={styles.profileCard} className='bg-danger bg-opacity-75 mx-auto'>
                    <h2 style={styles.name}>{newdata.firstName} {newdata.lastName}</h2>
                    <p><strong>Age:</strong> {newdata.age}</p>
                    <p><strong>Gender:</strong> {newdata.gender}</p>
                    <p><strong>Height:</strong> {newdata.height} cm</p>
                    <p><strong>Weight:</strong> {newdata.weight} kg</p>
                    <p><strong>Email:</strong> {newdata.email}</p>
                    <p><strong>Password:</strong> ********</p> {/* Password hidden for security */}
                    <button className="btn btn-primary opacity-75" onClick={() => setShowModal(true)}>
                        Edit Data
                    </button>
                </div>
            </div>


            <div className="container mt-5">
                {/* Button to open modal */}


                {/* Modal */}
                {showModal && (
                    <div className="modal fade show d-block bg-dark bg-opacity-50" tabIndex="-1">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4>
                                        Edit Information 
                                    </h4>
                                    <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                                </div>
                                <div className="modal-body">
                                    <form>
                                        <div className="mb-3">
                                            <label htmlFor="height" className="form-label">Height</label>
                                            <input
                                                value={newdata.height}
                                                onChange={handleChange}
                                                type="text"
                                                className="form-control"
                                                id="height"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="weight" className="form-label">Weight</label>
                                            <input
                                                value={newdata.weight}
                                                onChange={handleChange}
                                                type="text"
                                                className="form-control"
                                                id="weight"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="age" className="form-label">Age</label>
                                            <input
                                                value={newdata.age}
                                                onChange={handleChange}
                                                type="number"
                                                className="form-control"
                                                id="age"
                                            />
                                        </div>
                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <button className="btn btn-secondary" onClick={() => setShowModal(false)}>
                                        Close
                                    </button>
                                    <button className="btn btn-primary" onClick={handleSubmit}>
                                        Save Changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>




            {/* <!-- Modal --> */}
            {/* <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Edit Data</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className="col-lg-12 justify-content-center">
                                <form className='justfy-content-center'>
                                    <div className="mb-3 ms-auto">
                                        <label for="exampleInputEmail1" className="form-label">Height</label>
                                        <input value={newdata.height} onChange={((e) => handleChange(e))} type="text" className="form-control" id="height" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="exampleInputPassword1" className="form-label">Weight</label>
                                        <input value={newdata.weight} onChange={((e) => handleChange(e))} type="text" className="form-control" id="weight" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="exampleInputEmail1" className="form-label">Age</label>
                                        <input value={newdata.age} onChange={((e) => handleChange(e))} type="email" className="form-control" id="age" aria-describedby="emailHelp" />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" onClick={handleSubmit} class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div> */}






        </>
    );
} export default Profile;