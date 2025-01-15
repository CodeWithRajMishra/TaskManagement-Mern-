import { useState, useEffect } from "react";
import axios from "axios";

const AssignTask=()=>{
    const [mydata, setMydata]= useState([]);


   const loadData=async()=>{
    let api="http://localhost:8000/admin/userdatashow";
    const response= await axios.get(api);
    console.log(response.data);

   }

   useEffect(()=>{
    loadData();
   }, []);

    return(
        <>
          <h1> Assign Task to User</h1>
        </>
    )
}

export default AssignTask;