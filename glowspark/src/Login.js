import React,{useState} from 'react';
import Form from "react-bootstrap/Form";

import Button from "react-bootstrap/Form";

export default function Login(){
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    function validateForm(){
        return email.length>0 && password.length>0;
    }
    function handleSubmit(event){
        event.preventDefault();
    }
    return (
        <div className="Login">
            <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlld="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control autoFocus type="email" value={email} onchange={(e)=> setEmail(e.target.value)}/>
                    </Form.Group>
                    <Button block size="lg" type="submit" disabled={!validateForm()}>Login</Button>
             </Form>
        </div>
    );
}

