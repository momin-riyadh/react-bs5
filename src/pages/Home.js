import React, {useState} from "react";
import interviewData from "../common/components/interviewData";
import InterviewCard from "../common/components/InterviewCard";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import Logo from "../assets/images/logo.svg";
import Slider from "../common/components/Slider";
import Intro from "../common/components/Intro";
import Team from "../common/components/Team";
import ConditionalRendering from "../common/ConditionalRendering";
import {Link} from 'react-router-dom';


function Home() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const interviewComponents = interviewData.map(function (interview) {
        return (
            <InterviewCard key={interview.id} question={interview.question} answer={interview.answer}/>
        )
    })


    return (
        <div className="App">

            <Navbar className="fixed-top" bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand>
                        <Link to="/">
                            <img width="80px" className="img-fluid" src={Logo} alt=""/>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
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

                <div className="row">
                    <div className="col-md-8 mx-auto">
                        <ConditionalRendering/>
                    </div>
                </div>


            </div>


        </div>
    );


}

export default Home;