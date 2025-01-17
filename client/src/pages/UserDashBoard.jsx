import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {Link, Outlet} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';

const UserDashBoard=()=>{
    const [username, setUsername]= useState("");
    const [email, setEmail]=useState("");
    const navigate= useNavigate();
    useEffect(()=>{
        if (!localStorage.getItem("username"))
        {
            navigate("/home");
        }

        setUsername(localStorage.getItem("username"));
        setEmail(localStorage.getItem("useremail"));

    }, []);


    const userlogout=()=>{
        localStorage.clear();
        navigate("/home");

    }


    return(
        <>
            <div id="userdisplaylogin" >
                Welcome : {username} Email: {email}   <a href="#" onClick={userlogout}>Logout!</a>
            </div>
    <div id="userDashbordData">
       <div id="userleftmenu">
      
       <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link as={Link} to="mytask">My Task</Nav.Link>
      <Nav.Link as={Link} to="changepassword">Change Password</Nav.Link>
      <Nav.Link eventKey="link-2">Link</Nav.Link>
    </Nav>


       </div>
       <div id="userrightdata">


            <Outlet/>


       </div>
    </div>


        </>
    )
}

export default UserDashBoard;