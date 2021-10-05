import Button from '../Button';
import React, {useState} from 'react';
// import { Link } from 'react-router-dom';
import "./Payment.scss";
import Modal from "react-bootstrap/Modal";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import ElementDemos from "../Card/ElementDemos";

import SplitForm from "../Card/SplitForm";

import "../Card/styles.scss";
import { getFID } from 'web-vitals';

const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");
const demos = [
  
  {
    path: "/split-card-elements",
    label: "Split Card Elements",
    component: SplitForm
  }
  
];



export default function Payment(props) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [id, setId] = useState(null)
  
  async function submit() {
    setIsOpen(true)
    try {
      
      const response = await fetch("/privateRoute", {
        method: "GET",
        headers: {token: localStorage.token}
      });

      const parseRes = await response.json()

      const body = { 
        user_id: parseRes.id,
        yoga_session_id: props.sessionId,
        date: props.date,
        
      }
      console.log(body);
      
      const response2 = await fetch("/api/v1/booking", {
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify(body)
      })

      // const parseRes = await response.json()

      // localStorage.setItem("token", parseRes.token);

      // setAuth(true);

    } catch (error) {
      console.error(error);
    }
  }
  
  return (
  <div>
      <article className="pay-container">
        <h3 className="title">
            {props.name}
            <p className="durations">
        {props.duration}
        </p>
        <p className="prices">
        {props.price}
        </p>
        <p className="date">
        {props.date}
        </p>
        </h3>
        
      </article>
            <div className="button">
        <Button onClick={()=>{submit()}}>Pay Now</Button>
        </div>  
        
        <Modal show={isOpen} >
      
        <Modal.Body>
        <Elements stripe={stripePromise}>
          <ElementDemos demos={demos} />
          <SplitForm />
          </Elements> 
        </Modal.Body>
      </Modal>
  </div>
  )
};

// import Button from '../Button';
// import { Link } from 'react-router-dom';

// export default function Payment(props) {
  
//   return (
//   <div>
//       <article>
//         <h1>
//             {props.name}
//         </h1>
//         {props.duration}
//         {props.price}
//         {props.date}
//       </article>
//       <Link to={`/card`}>
//             <div className="button">
//         <Button>Pay Now</Button>
//         </div>  
//         </Link>
//   </div>
//   )
// };