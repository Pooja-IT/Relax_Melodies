import React from "react";
import "./Form.scss";
import Button from "./Button";

export default function Form() {
    return(
        <section className="session-form">
            <h4 className="content">Choose your Session</h4>
            <form className="row g-3">
                <div className="input-forms">
                    <div className="single-form">
                        <label for="email">Name:</label>
                        <input class="form-control" type="text" name="text"  required />
                    </div>
                    <div className="single-form">
                        <label for="mobile_number">Phone:</label>
                        <input class="form-control" type="text" name="mobile_number"  required />
                    </div>
                    <div className="single-form">
                        <label>Choose your preferred date:</label>
                        <input class="date-form" type="date" name="date" min="2017-04-01" max="2017-04-30"/>
                    </div>
                </div>
                 
            </form>
            <div class="join">
            <Button onClick={ () => {console.log("Click on Join Now")}}>Join Now</Button>
            </div>
        </section>
    )
}
