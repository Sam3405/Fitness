import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Manageusers() {
    const [data, setData] = useState([]);

    function loaddata() {
        axios.get("https://66a8c558e40d3aa6ff595948.mockapi.io/Users/")
            .then((res) => {
                setData(res.data);
            });
    }

    function handleDelete(id) {
        axios.delete(`https://66a8c558e40d3aa6ff595948.mockapi.io/Users/${id}`)
            .then(() => {
                loaddata(); // Reload data after deletion
            });
    }

    useEffect(() => {
        loaddata();
    }, []);

    return (
        <>
            <div className='container mt-5'>
                <h2 className="text-center mb-4 text-primary">Manage Users</h2>
                <table className="table table-dark table-hover table-bordered text-center rounded shadow-sm">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Height</th>
                            <th scope="col">Weight</th>
                            <th scope="col">Age</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((eachData, i) => (
                                <tr key={i}>
                                    <td>{eachData.firstName}</td>
                                    <td>{eachData.lastName}</td>
                                    <td>{eachData.email}</td>
                                    <td>{eachData.height}</td>
                                    <td>{eachData.weight}</td>
                                    <td>{eachData.age}</td>
                                    <td>
                                        <button className="btn btn-danger" onClick={() => handleDelete(eachData.id)}>
                                            <i className="fa-solid fa-trash" style={{ color: "#fff" }}></i>
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Manageusers;
