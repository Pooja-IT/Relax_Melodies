import React, { useState } from "react";
import "./Form.scss";
import {DatePickerComponent} from "@syncfusion/ej2-react-calendars";
import {TimePickerComponent} from "@syncfusion/ej2-react-calendars";


export default function Form(props) {
    const[inputs,setInputs] = useState({
        date: "",
    });
    const { date } = inputs;  const onChange = (e) => {
        setInputs({...inputs, [e.target.name] : e.target.value })
    }

    const minDate = new Date("10/07/2021 9:00 am");
    const maxDate = new Date("12/31/2021 6:00 pm");

    return(
        <section className="session-form">
            <h4 className="name">Choose your Date and Time:</h4>
            <form className="row g-3">
            <div className="input-forms">
                <DatePickerComponent placeholder="Select a Date"
                value={date}
                onChange={e => onChange(e)}
                min={minDate}
                max={maxDate}
                name="date"
                format="dd-MMM-yy"> 
                </DatePickerComponent>   

                <TimePickerComponent placeholder="Select a time"
                value={date}
                onChange={e => onChange(e)}
                min={minDate}
                max={maxDate}
                name="date"> 
                </TimePickerComponent>
            </div>
            </form>
        </section>
    )
}