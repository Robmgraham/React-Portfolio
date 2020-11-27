import React from "react";
import NavBar from "../components/Nav/Nav"

function Contact() {
    return (
        <>
            <NavBar />
            <div className="container contactBody" >
                <div className="row">
                    <div className="col-md-5">
                        <form>

                            <div className="form-group">
                                <label className="speech-bubble" for="exampleInputEmail1">Name</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" />

                                <div />

                                <div className="form-group" />
                                <label className="speech-bubble" for="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                <small id="emailHelp" className="form-text text-muted"><span style={{color:"white"}}>Your Email will not
                                be shared with anyone</span></small>
                                <div />

                                <div className="form-group">
                                    <label className="speech-bubble" for="exampleFormControlTextarea1">Message</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Type Message here" rows="8">  </textarea>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact