import React from "react";
import Nav from 'react-bootstrap/Nav'
import "./style.css"
import {Link} from "react-router-dom"

function NavBar (){
    return (
        <Nav class="navbar fixed-bottom navbar-expand-lg navbar-light bg-light">
        <Link class="navbar-brand" href="">Robert Graham</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <Link class="nav-link" href="/">About</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" href="/portfolio">Projects/Apps</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" href="/contact">Contact<span class="sr-only">(current)</span></Link>
                </li>
            </ul>
        </div>
    </Nav>
    )
}

export default NavBar;