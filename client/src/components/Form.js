import React from "react";
import "./Form.scss";
import Button from "./Button";

export default function Form() {
    return(
        <section className="session-form">
            <h4>Choose your Session</h4>
            <form className="row g-3">
                <div className="input-forms">
                    <div className="single-form">
                        <label for="email">Enter Name:</label>
                        <input class="form-control" type="text" name="text"  required />
                    </div>
                    <div className="single-form">
                        <label for="mobile_number">Enter Mobile Number:</label>
                        <input className="form-control" type="text" name="mobile_number"  required />
                    </div>
                    <div className="single-form">
                        <label>Choose your preferred date:</label>
                        <input type="date" name="party" min="2017-04-01" max="2017-04-30"/>
                    </div>
                </div>
                 
            </form>
            <Button onClick={ () => {console.log("Click on Join Now")}}>Join Now</Button>
        </section>
    )
}
