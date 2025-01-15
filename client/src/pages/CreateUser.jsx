import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from "axios";
import { message } from 'antd';
const CreateUser=()=>{
    const [input, setInput] = useState({});


    const handleInput=(e)=>{
        let name= e.target.name; 
        let value=e.target.value; 
        setInput(values=>({...values, [name]:value}));
        console.log(input);
    }


    const handleSubmit=async()=>{
        let api="http://localhost:8000/admin/createuser";
        try {
            let response= await axios.post(api, input);
            console.log(response.data);
            if (response)
            {
                message.success(response.data.msg);
            }
        } catch (error) {
            console.log(error);
        }
   
    }

    return(
        <>
          <h1> Create new user</h1>

          <Form style={{width:"400px"}}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter user name </Form.Label>
        <Form.Control type="text" name="username" value={input.username} onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Select aria-label="Default select example" name="designation" value={input.designation} onChange={handleInput}>
      <option>Select Designation</option>
      <option value="Frontend">Front End Designer</option>
      <option value="Backend">Back End Designer</option>
      <option value="Analyst">Analyst</option>
    </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter user email</Form.Label>
        <Form.Control type="text" name="email" value={input.email} onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter password</Form.Label>
        <Form.Control type="password" name="password" value={input.password} onChange={handleInput} />
      </Form.Group>
      <Button variant="primary" type="button" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>


        </>
    )
}

export default CreateUser;