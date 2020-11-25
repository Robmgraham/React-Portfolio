import React from "react";
import Nav from 'react-bootstrap/Nav'
import "./style.css"

function NavBar (){
    return (
        <Nav class="navbar fixed-bottom navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="">Robert Graham</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="/">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/portfolio">Projects/Apps</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/contact">Contact<span class="sr-only">(current)</span></a>
                </li>
            </ul>
        </div>
    </Nav>
    )
}

export default NavBar;