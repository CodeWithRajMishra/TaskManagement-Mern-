import { useParams } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import { message } from "antd";
import { useNavigate } from "react-router-dom";
const UserTaskAssign=()=>{
    const {id} = useParams();
    const [tasktitle, setTaskTitle]= useState("");
    const [taskdetail, setTaskDetail]=useState("");
    const navigate= useNavigate();

   
    const taskAssignToUser=async()=>{
        try {
            let api="http://localhost:8000/admin/assigntask";
            const response= await axios.post(api, {id:id, tasktitle:tasktitle, taskdetail:taskdetail});
            console.log(response.data);
            message.success(response.data.msg);
            navigate("../assigntask");

        } catch (error) {
            console.log(error);
        }
    }

    return(
        <>
          <h1> Assign New Task To User </h1>
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Enter Task Title</Form.Label>
        <Form.Control type="text"  value={tasktitle} onChange={(e)=>{setTaskTitle(e.target.value)}} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
        <Form.Label>Enter Description</Form.Label>
        <Form.Control as="textarea" rows={3} value={taskdetail} onChange={(e)=>{setTaskDetail(e.target.value)}} />
      </Form.Group>

      <Button variant="primary" onClick={taskAssignToUser} >Assign Task</Button>
          
    </Form>
        </>
    )
}

export default UserTaskAssign;