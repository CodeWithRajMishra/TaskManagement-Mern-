import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {Link, Outlet} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';

const AdminDashBoard=()=>{
    const [adminname, setAdminName]=useState("");
    const navigate= useNavigate();

    useEffect(()=>{
        if (!localStorage.getItem("adminname"))
        {
            navigate("/home");
        }
        setAdminName(localStorage.getItem("adminname"));
    }, [])

    const logout=()=>{
        localStorage.clear();
        navigate("/home");

    }



    return(
        <>
          <div id="admindata">
            Welcome {adminname}!  
            <a href="#" className="logoutbtn" onClick={logout}>Logout</a>
          </div>

          <div id="adminarea">
             <div id="adminMenu">

       
     <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link as={Link} to="createuser">Create New User</Nav.Link>
      <Nav.Link as={Link} to="assigntask">Assign Task</Nav.Link>
      <Nav.Link eventKey="link-2">Link</Nav.Link>
    </Nav>


           <br />     
               
             </div>
             <div id="adminRightData">
             
              <Outlet/>

             </div>
            
          </div>
        </>
    )
}


export default AdminDashBoard;