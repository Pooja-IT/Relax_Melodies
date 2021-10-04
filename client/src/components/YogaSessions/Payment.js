import Button from '../Button';
import React from 'react';
// import { Link } from 'react-router-dom';
import "./Payment.scss";
import Modal from "react-bootstrap/Modal";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import ElementDemos from "../Card/ElementDemos";

import SplitForm from "../Card/SplitForm";

import "../Card/styles.scss";

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
  
  
  return (
  <div>
      <article className="pay-container">
        <h3 className="title">
            {props.name}
            <p className-="duration">
        {props.duration}
        </p>
        <p className="price">
        {props.price}
        </p>
        <p className="date">
        {props.date}
        </p>
        </h3>
        
      </article>
            <div className="button">
        <Button onClick={()=>{setIsOpen(true)}}>Pay Now</Button>
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