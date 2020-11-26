import React from "react"
// import NavBar from "../components/Nav/Nav"


function About () {
    return (
        <>
        
    {/* <NavBar/> */}

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