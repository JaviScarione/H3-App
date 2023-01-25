import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import '../css/Login.css';



function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

       
          
    function handleLogin(event) {
      event.preventDefault();
      // Validate form and send data to server
    }

     
        return(
            <Form className="wrapper" onSubmit={handleLogin}>
                <FormGroup className="text-center my-1 name">
                    <Label>Bienvenido!</Label>
                </FormGroup>
                <FormGroup className="text-center credentials">
                    <Label>Ingresa tus credenciales</Label>
                </FormGroup>                    
                <FormGroup className="form-field d-flex align-items-center">
                        <FontAwesomeIcon icon={faUser} />
                        <Input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email"/>                
                </FormGroup>
                <FormGroup className="form-field d-flex align-items-center">
                        <FontAwesomeIcon icon="fa-solid fa-key" />
                        <Input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Contraseña"/>
                </FormGroup>
                <Button type="submit" value="submit"className="btn mt-3">Ingresar</Button>
            </Form>        
        );
    }

export default Login;