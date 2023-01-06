// import React from 'react'
import axios from "axios";
 import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Teacher(){
    const [user, setUser] = useState([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);

  let fetchData = async () => {
    try {
      setLoading(true);
      const users = await axios.get(
        "https://63a974a2100b7737b9927c71.mockapi.io/Sutudent"
      );
      console.log(users);
      setUser(users.data);
      setLoading(false);
    } catch (error) {
      alert("Error");
    }
  };

  let deleteUser = () => {
    const result = window.confirm("Are you sure do you want to delete ?");
    if (result) {
      alert("Deleted");
    }
  };

  return (
    
    <>
     {
        isLoading ? (
          <span>
            <b>Loading......</b>
          </span>
        ) : (
          <div class="card shadow mb-4">
            <div class="card-header py-3">
            <h1><b>Teacher</b></h1>
              <h6 class="m-0 font-weight-bold text-primary">
                DataTables Example
              </h6>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table
                  class="table table-bordered"
                  id="dataTable"
                  width="100%"
                  cellspacing="0"
                >
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Country</th>
                      <th>State</th>
                      <th>City</th>
                      <th>Phone</th>
                      <th>Dob</th>
                      <th>Gender</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tfoot></tfoot>
                  <tbody>
                    {user.map((user) => {
                      return (
                        <tr>
                          <td>{user.id}</td>
                          <td>{user.name}</td>
                          <td>{user.email}</td>
                          <td>{user.country}</td>
                          <td>{user.state}</td>
                          <td>{user.city}</td>
                          <td>{user.phone}</td>
                          <td>{user.dob}</td>
                          <td>{user.gender}</td>
                          <td>
                            <Link
                              to={`/user/${user.id}`}
                              className="btn btn-warning mr-2"
                            >
                              View
                            </Link>
                            <Link to={`/edit`} className="btn btn-primary mr-2">
                              Edituser
                            </Link>
                            <button  onClick={ () => deleteUser ()} className="btn btn-danger mr-2">
                              Delete
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
    
    </>
  )
}

export default Teacher