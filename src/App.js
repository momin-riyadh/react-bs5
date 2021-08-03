import React, {useEffect, useState} from "react";
import {Navbar, Container, Nav, NavDropdown, Modal, Button} from "react-bootstrap";
import './assets/css/App.css';

// Images
import Logo from './assets/images/logo.svg'
import Banner from "./common/components/Banner";
import Slider from "./common/components/Slider";
import Intro from "./common/components/Intro";
import Team from "./common/components/Team";

// Components
import InterviewCard from "./common/components/InterviewCard";
// Data
import interviewData from "./common/components/interviewData";


function App() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


   const interviewComponents = interviewData.map(function (interview){
        return (
            <InterviewCard key ={interview.id} question ={interview.question}  answer={interview.answer}/>
        )
    })



    return (
        <div className="App">

            <Navbar className="fixed-top" bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img width="80px" className="img-fluid" src={Logo} alt=""/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">About Us</Nav.Link>
                            <Nav.Link href="#link">Services</Nav.Link>
                            <Nav.Link href="#link">Products</Nav.Link>
                            <Nav.Link href="#link">Contact</Nav.Link>
                            <NavDropdown title="Admin" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


            <Slider/>
            <Intro/>
            <Team/>

            <div className="container">

                <div className="row">
                    <div className="col-md-8 mx-auto">
                        {interviewComponents}
                    </div>
                </div>


            </div>


        </div>
    );
}

export default App;
