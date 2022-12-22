import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const AddTeam = (props) => {
    const [name,setname] = useState("");
    const [des,setdes] = useState("");
    const [gen,setgen] = useState("");
    const [team,setteam] = useState("");
    let add = () =>{
        props.addT(name,des,gen,team);
        setname("");
        setdes("");
        setgen("");
        setteam("");
        alert("New Team Member has been Added")
    }
  return (  
    <>
    <Form onSubmit={add}>
    <Form.Group className="mb-3" controlId="formBasicText">
      <Form.Label><b>Full Name</b></Form.Label>
      <Form.Control type="text" value={name}
                     onChange={(e)=>setname(e.target.value)} placeholder="Enter Full Name" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicText">
      <Form.Label><b>Designation</b></Form.Label>
      <Form.Control type="text" value={des}
                     onChange={(e)=>setdes(e.target.value)} placeholder="Enter designation" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicText">
      <Form.Label><b>Gender</b></Form.Label>
      <Form.Control type="text" value={gen}
                     onChange={(e)=>setgen(e.target.value)} placeholder="Enter gender" />
    </Form.Group>
    
    <Form.Group className="mb-3 my-2" controlId="formBasicText">
      <Form.Label><b>Team Name</b></Form.Label>
      <Form.Control type="text" value={team}
                     onChange={(e)=>setteam(e.target.value)} placeholder="Enter Team Name" />
    </Form.Group>
    <Button variant="primary" type="submit">
     Add
    </Button>

  </Form>
  </>
  )
}

export default AddTeam
