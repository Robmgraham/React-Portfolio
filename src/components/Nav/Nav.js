import React from "react";
import {Nav, Button} from 'react-bootstrap'
import "./style.css"
import {Link} from "react-router-dom"


function NavBar (){
    return (
        <Nav className="navbar fixed-bottom navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" href="">Robert Graham</Link>
        <Button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </Button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link to="/">About</Link>
                </li>
                <li className="nav-item">
                    <Link to="/portfolio">Portfolio</Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </div>
    </Nav>
    )
}

export default NavBar;