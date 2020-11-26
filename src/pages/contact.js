import React from "react";
import NavBar  from "../components/Nav/Nav"

function Contact () {
    return (
        <>
        <NavBar/>
        <div class="container">
        <div class="row">
            <div class="col-md-5">
                <form>
                    
                    <div class="form-group">
                        <label class="speech-bubble" for="exampleInputEmail1">Name</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name"/>

                    <div/>
                    
                    <div class="form-group"/>
                        <label class="speech-bubble" for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                        <small id="emailHelp" class="form-text text-muted"><span style="color:white">Your Email will not
                                be shared with anyone</span></small>
                    <div/>
                    
                    <div class="form-group">
                        <label class="speech-bubble" for="exampleFormControlTextarea1">Message</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Type Message here" rows="8">  </textarea>
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