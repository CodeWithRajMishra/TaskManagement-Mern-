import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
                
             dsfgdfgdfg    
             </div>
             <div id="adminRightData">
             dfgdfgdfg

             </div>
            
          </div>
        </>
    )
}


export default AdminDashBoard;