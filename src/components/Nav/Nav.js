import React from "react";
import {Nav, Button} from 'react-bootstrap'
import "./style.css"
import {Link} from "react-router-dom"


function NavBar (){
    return (
        <Nav class="navbar fixed-bottom navbar-expand-lg navbar-light bg-light">
        <Link class="navbar-brand" href="">Robert Graham</Link>
        <Button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </Button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <Link to="/">About</Link>
                </li>
                <li class="nav-item">
                    <Link to="/portfolio">Portfolio</Link>
                </li>
                <li class="nav-item">
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </div>
    </Nav>
    )
}

export default NavBar;