import React, { Component} from "react";
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import '../css/Login.css';



class Login extends Component {

    constructor(props) {
        super(props);

        this.handleLogin = this.handleLogin.bind(this);   
    }
    
          
      handleLogin(event) {
        alert("Usuario: " + this.username.value + " Contraseña: " + this.password.value);
        event.preventDefault();
    }

    render() {
        return(
            <div className="wrapper">
                <div className="text-center mt-4 name">
                    Bienvenido!
                </div>
                <div className="text-center credentials">
                    Ingresa tus credenciales
                </div>
                <Form className="p-3 mt-3" onSubmit={this.handleLogin}>
                    <FormGroup>
                        <div className="form-field d-flex align-items-center">
                            <FontAwesomeIcon icon={faUser} />
                            <input type="text" name="Mail" id="Mail" placeholder="Email"/>
                        </div>
                    </FormGroup>
                    <FormGroup>
                        <div className="form-field d-flex align-items-center">
                            <FontAwesomeIcon icon="fa-solid fa-key" />
                            <input type="password" name="password" id="pwd" placeholder="Contraseña"/>
                        </div>
                    </FormGroup>
                    <a href="/">
                        <Button type="submit" value="submit"className="btn mt-3">Ingresar</Button>
                    </a>                
                </Form>        
            </div>
        );
    }
}

export default Login;
