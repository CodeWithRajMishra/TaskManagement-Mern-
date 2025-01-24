import { useState, useEffect } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { message } from "antd";
import compimg from "../images/comtask.png";
import incompimg from "../images/incomtask.png";

const DisplayTask=()=>{
  const [mydata, setMydata]= useState([]);
  const loadData=async()=>{
    let api="http://localhost:8000/admin/displayusertask";
    try {
          const response=  await axios.get(api);
          console.log(response.data);
          setMydata(response.data);
    } catch (error) {
        console.log(error)
    }
  }
  useEffect(()=>{
    loadData();
  }, []);

const deluserTask=async(id)=>{
    let api=`http://localhost:8000/admin/deleteusertask/?id=${id}`;

    try {
        const response= await axios.get(api);
        
        message.success("Task succesfully deleted!");
        loadData();
    } catch (error) {
         
        console.log(error);
    }
  
}


  const ans=mydata.map((key)=>{
      return(
        <>
          <tr> 
            <td> 
             {key.status=="Complete"? (<img src={compimg} width='30' height='30' />) : ( <img src={incompimg} width='30' height='30' />) }

            </td>
            <td> {key.userid.username} </td>
            <td> {key.userid.designation} </td>
            <td> {key.userid.email} </td>
            <td> {key.tasktitle} </td>
            <td> {key.taskdetail} </td>
            <td>
                <Button variant="primary" onClick={()=>{deluserTask(key._id)}}>Delete</Button>
                 </td>
          </tr>
        </>
      )

  })
    return(
        <>
          <h1> Display all users Task</h1>
          <Table striped bordered hover>
      <thead>
        <tr>
            <th> </th>
          <th>User name</th>
          <th>Designation</th>
          <th>Email</th>
          <th>Task Title</th>
          <th>Task Detail</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
       {ans}
        </tbody>
        </Table>


        </>
    )
}

export default DisplayTask;