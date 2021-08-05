import React from "react";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";
import Logo from "../assets/images/logo.svg";

function About() {
    return (
        <div>
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
                            <Nav.Link to="/">Home</Nav.Link>
                            <Nav.Link to="/about">About Us</Nav.Link>
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
            <div className="about-page-area">
                <div className="container">
                    <div className="col-lg-10 mx-auto">
                        <div className="text-center">
                            <h1>About Us</h1>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi, architecto asperiores
                            aspernatur atque consequatur culpa cum cumque dolore error exercitationem in maxime, nemo
                            neque
                            quam quia rem voluptatem. Ab accusamus amet at atque cum distinctio dolorem eius iste
                            laboriosam
                            modi necessitatibus nemo possimus rem repellendus sequi sint sit temporibus, tenetur
                            voluptas,
                            voluptates. Explicabo nesciunt, placeat. Architecto cum delectus deserunt dolores eum nulla
                            quisquam reiciendis repellendus sint veniam. Blanditiis cupiditate eaque eius eveniet ex
                            exercitationem expedita laborum laudantium nesciunt quaerat quo ratione sequi, soluta
                            tempora
                            veniam voluptates voluptatibus. Atque aut cum eaque enim facilis nostrum pariatur quisquam
                            reprehenderit temporibus unde?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;