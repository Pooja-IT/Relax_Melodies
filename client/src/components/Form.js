import React from "react";
import "./Form.scss";
// import DateRangePicker from 'react-bootstrap-daterangepicker';
// import TimePicker from 'react-bootstrap-time-picker';

export default function Form() {
    function handleSubmit(event){
        event.preventDefault();
        alert("Congratulations!! Booking Successfully");
        event.target.reset();
    }
    return(
        <section className="session-form">
            <h4 className="name">Choose your Session</h4>
            <form className="row g-3" onSubmit={handleSubmit}>
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
                        <input class="date-form" type="date" name="date" min="2017-04-01" max="2017-04-30"/>
                    </div>
                </div>
                {/* <TimePicker start="10:00" end="21:00" step={30} /> */}
                    <div className="single-form">
                        <input type="submit" value="Join now"/>
                    </div>
                
            </form>
        </section>
    )
}
