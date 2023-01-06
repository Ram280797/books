import React, { useEffect ,useState } from "react";
import Card from "./Card";
import Student from "./Student";
import Teacher from "./Teacher";

function Dashboard() {
  const [counter,setCounter] =useState(0)
  useEffect(() => {

  } , []);
  return (
    <div>
      <div class="container-fluid">
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 class="h3 mb-0 text-gray-800"> Welcome to Dashboard</h1>
         
          <button
            class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm" >
            <i class="fas fa-download fa-sm text-white-50"></i> Generate Report
          </button>
          <p>Admin / Dashboard</p>
        </div>
        <div>
          <Card/>
         
            </div>
      </div>
    </div>
  );
}

export default Dashboard;
