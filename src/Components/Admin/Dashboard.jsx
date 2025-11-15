import axios from 'axios';
import React, { useState } from 'react'

function Dashboard() {
     const [count, setCount] = useState("");
    function loaddata() {
        axios.get("https://66a8c558e40d3aa6ff595948.mockapi.io/Users/")
            .then((res) => {
                setCount(res.data.length);
                
            })
    }

    loaddata();
  return (
    <>
       <div className="p-4 w-100">
                    <h2>Welcome, Admin</h2>
                    <p>This is your admin dashboard where you can manage the system.</p>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="card shadow-sm p-3">
                                <h5>Total Users</h5>
                                <p>{count}+</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card shadow-sm p-3">
                                <h5>Active Users</h5>
                                <p>{count}+</p>
                            </div>
                        </div>
                    </div>
                </div>
    </>
  )
}

export default Dashboard
