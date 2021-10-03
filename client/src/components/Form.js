import React from "react";
import "./Form.scss";
import { Link } from 'react-router-dom';
// import TimePicker from 'react-bootstrap-time-picker';

export default function Form() {

    return(
        <section className="session-form">
            <h4 className="name">Choose your Session Date</h4>
            <form className="row g-3">
                <div className="input-forms">
                 
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

// import React, { useState } from "react";
// import "./Form.scss";
// import { Link } from 'react-router-dom';
// import Button from "./Button";
// // import DateRangePicker from 'react-bootstrap-daterangepicker';
// // import TimePicker from 'react-bootstrap-time-picker';

// export default function Form(props) {
//     const[inputs,setInputs] = useState({
//         date: ""
//     });
//     const { date } = inputs;


//     const onChange = (e) => {
//         setInputs({...inputs, [e.target.name] : e.target.value })
//       }
    

//     return(
//         <section className="session-form">
//             <h4 className="name">Choose your Date:</h4>
//             <form className="row g-3">
                
                 
//                     <div className="single-form">
//                         <label>Choose your Date:</label>
//                         <input value={date} onChange={e => onChange(e)} class="date-form" type="date" name="date" min="2021-10-08" max="2021-10-30"/>
//                     </div>
               
//                 {/* <TimePicker start="10:00" end="21:00" step={30} /> */}
//                     <div className="single-form">
                    
//                         <input type="submit" className="button-container" value="Join now"/>
                   
//                     </div>

//                     <div className="single-form">
                    
//                     <Link to={`/card`}>
//                         <div className="button">
//                     <Button>Pay Now</Button>
//                     </div>  
//                     </Link>                   
//                     </div>
                
//             </form>
//         </section>
//     )
// }