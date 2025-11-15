import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Userfeedback() {
    const [data, setData] = useState([]);

    function loaddata() {
        axios.get("https://66a8c558e40d3aa6ff595948.mockapi.io/feedbacks").then((res) => {
            setData(res.data);
        });
    }

    // 🔴 DELETE function
    function handleDelete(id) {
        if (window.confirm("Are you sure you want to delete this feedback?")) {
            axios.delete(`https://66a8c558e40d3aa6ff595948.mockapi.io/feedbacks/${id}`)
                .then(() => {
                    // Option 1: Reload all data
                    loaddata();

                    // Option 2 (faster): Remove from local state
                    // setData(data.filter(item => item.id !== id));
                });
        }
    }

    useEffect(() => {
        loaddata();
    }, []);

    return (
        <div className="container mt-5">
            <h2 className="text-center text-primary mb-4">User Feedback</h2>
            <table className="table table-dark table-hover table-bordered text-center rounded shadow-sm">
                <thead>
                    <tr>
                        <th className="col-lg-2">Name</th>
                        <th className="col-lg-3">Email</th>
                        <th className="col-lg-5">Message</th>
                        <th className="col-lg-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((eachData, i) => (
                            <tr key={i}>
                                <td>{eachData.name}</td>
                                <td>{eachData.email}</td>
                                <td>{eachData.message}</td>
                                <td>
                                    <button
                                        className="btn btn-sm btn-danger"
                                        onClick={() => handleDelete(eachData.id)}
                                    >
                                        <i className="fa-solid fa-trash"></i> Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Userfeedback;
