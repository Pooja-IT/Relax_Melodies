import React from "react";
import "./Form.scss";
import { Link } from 'react-router-dom';
// import DateRangePicker from 'react-bootstrap-daterangepicker';
// import TimePicker from 'react-bootstrap-time-picker';

export default function Form() {

    return(
        <section className="session-form">
            <h4 className="name">Choose your Session</h4>
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
                        <label>Choose your Date:</label>
                        <input class="date-form" type="date" name="date" min="2021-10-08" max="2021-10-30"/>
                    </div>
                </div>
                {/* <TimePicker start="10:00" end="21:00" step={30} /> */}
                    <div className="single-form">
                    <Link to={`/payment`}>
                        <input type="submit" className="button-container" value="Join now"/>
                    </Link>
                    </div>
                
            </form>
        </section>
    )
}
