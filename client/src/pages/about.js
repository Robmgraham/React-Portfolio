import React from "react"
function About () {
    return (
        <>
        
 
    <nav className="navbar fixed-bottom navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Robert Graham</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="index.html">About <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="portfolio.html">Projects/Apps</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="contact.html">Contact</a>
                </li>
            </ul>
        </div>
    </nav>

    <div className="media container media-background">
        <img className="mr-3 mePhoto" src="/Images/Photo-of-me.jpg" alt="Generic placeholder image" />

        <div className="media-body mt-4">
            <h5 className="mt-0">Robert Graham</h5>
            I live in University Heights in San Diego, California. For the past year I have been living my best life by taking advantage of all that San Diego has to offer. I am currently a student through the UCSD Extension course learning the basics and intricacies
            of web development. I have been in the back-end of the retail world, mostly pertaining to shipping & receiving, for the past 17 years. Web development has given me a whole new world of knowledge that I am hoping to excel in like I have in
            my retail experience.
        </div>

    </div>
        </>  
    )

}

export default About;