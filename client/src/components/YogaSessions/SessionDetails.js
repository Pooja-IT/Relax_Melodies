import {useParams} from "react-router-dom";
import { useState, useEffect} from "react";
import axios from "axios";
import Form from "../Form";
// import { Link } from 'react-router-dom';
// import Button from "../Button";
// import Card from "./Card";
import Payment from "./Payment";
import "./SessionDetails.scss";
import {DatePickerComponent} from "@syncfusion/ej2-react-calendars";
import {TimePickerComponent} from "@syncfusion/ej2-react-calendars";

export default function SessionDetails() {
  const[inputs,setInputs] = useState({
    date: "",
});
const { date } = inputs;


const onChange = (e) => {
    console.log(e)

    setInputs({...inputs, [e.target.name] : e.target.value })
    

  }


// const date = new Date("10/07/2021 10:00 am");
const minDate = new Date("10/07/2021 9:00 am");
const maxDate = new Date("12/31/2021 6:00 pm");

  
  const {id}=useParams()
  const [data,setData] = useState({});
  const [positionsData,setPositionsData] = useState([]);


  useEffect(() => { 
    axios.get(`/api/v1/sessions/${id}`)
    .then(response => {
      console.log(response.data.data.YogaSession);
         setData(response.data.data.YogaSession)
               response.data.data.YogaSession.yoga_positions.forEach(positionid => {
        axios.get(`/api/v1/positions/${positionid}`)
        .then((response) => {
          setPositionsData(prev => [...prev,response.data.data.YogaPosition])
        })  
      })
    }) 
  },[id])

  
  let payContainer
  if (date !== "") {
    
    payContainer = <Payment name={data.name} duration={data.duration} price={data.price} date={date.toString()} />
    // <p>
    //   {data.name}
    //   {data.duration}
    //   {data.price}
    //   {date}
    //   </p>
  } 
  
  
  
  return <div>
    
      <article>
        <div className="service-image-container">
        <img src={data.picture} alt=""/>
        </div>
        
        <h1 className="name-container">
            {data.name}
        </h1>
        <p className="desc-container">
          
            {data.description}
        </p>
        <p className="duration-container">
            {data.duration}
        </p>
        <p className="price-container">
            {data.price}
        </p>
        
    </article>
        <h2>Positions</h2>
        {positionsData.map(position => (
          <article>  
            <h4>
                {position.name}
            </h4>
            <iframe width="300" height="150" src={`https://www.youtube.com/embed/${position.video}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            {position.description}
        </article>
        ))}



     {/* <section className="session-form">
            <h4 className="name">Choose your Date:</h4>
            <form className="row g-3">
                
                 
                    <div className="single-form">
                        <label>Choose your Date:</label>
                        <input value={date} onChange={e => onChange(e)} className="date-form" type="date" name="date" min="2021-10-08" max="2021-10-30"/>
                    </div>
                    <div>Choose Your Time:</div>
                <TimePicker start="10:00" end="21:00" step={30} />  
            </form>
        </section>  */}
        <section className="session-form">
            <h4 className="name">Choose your Date and Time:</h4>
            
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
            <p>{inputs.date.toString()}</p>
            {payContainer}
        </section>
       
       
        
        
  </div>
};
