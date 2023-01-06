import axios from "axios";

import { Link } from "react-router-dom";
import Usercreate from "./Usercreate";
import Student from "./Student";
import Teacher from "./Teacher";

function User() {
  
  return (
    <>
      <div class="container-fluid">
        <h1 class="h3 mb-2 text-gray-800">Library Management📚</h1>
        <Link to={"/user_create/Update"} className=" btn btn-primary mr-2">Add Books{" "}
        </Link>
<Link to={'/book_list'} className="btn btn-primary mr-2">Books</Link>
       
<Link to={"/user_create/Update"} className="btn btn-primary mr-2">Upadate</Link>
        </div>
     
    </>
  );
}

export default User;
