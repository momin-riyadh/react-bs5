import React, {useEffect, useState} from "react";
import {Navbar, Container, Nav, NavDropdown, Modal, Button} from "react-bootstrap";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './assets/css/App.css';

// Images
import Logo from './assets/images/logo.svg'
import Banner from "./common/components/Banner";
import Slider from "./common/components/Slider";
import Intro from "./common/components/Intro";
import Team from "./common/components/Team";
import ConditionalRendering from "./common/ConditionalRendering";

// Components
import InterviewCard from "./common/components/InterviewCard";
// Data
import interviewData from "./common/components/interviewData";
import Home from "./pages/Home";
import About from "./pages/About";


function App() {

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>

                <Route path="/about">
                    <About/>
                </Route>
            </Switch>
        </Router>
    )

}

export default App;
