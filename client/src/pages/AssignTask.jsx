import { useState, useEffect } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
const AssignTask=()=>{
    const [mydata, setMydata]= useState([]);
    const navigate= useNavigate();


   const loadData=async()=>{
    let api="http://localhost:8000/admin/userdatashow";
    const response= await axios.get(api);
    setMydata(response.data);
    console.log(response.data);

   }

   useEffect(()=>{
    loadData();
   }, []);

const taskAssign=(id)=>{
  navigate(`../usertaskassign/${id}`);
}


 let sno=0;
   const ans=mydata.map((key)=>{
       sno++;
         return(
          <>
          <tr>
            <td> {sno}</td>
            <td>{key.username} </td>
            <td>{key.designation} </td>
            <td>{key.email} </td>
            <td> 
              
            <Button variant="primary" onClick={()=>{taskAssign(key._id)}}>Assign Task</Button>
              
              </td>
          </tr>
          
          
          </>
         )
   })

    return(
        <>
          <h1> Assign Task to User</h1>
          <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>User Name</th>
          <th>Designation</th>
          <th>Email</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
       {ans}
      </tbody>
      </Table>
        </>
    )
}

export default AssignTask;