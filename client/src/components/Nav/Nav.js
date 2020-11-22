import React from "react";


function Nav (){
    return (
        <nav class="navbar fixed-bottom navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Robert Graham</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="index.html">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="portfolio.html">Projects/Apps</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="contact.html">Contact<span class="sr-only">(current)</span></a>
                </li>
            </ul>
        </div>
    </nav>
    )
}

export default Nav;