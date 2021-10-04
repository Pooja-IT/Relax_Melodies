import React from "react";
import ReactDOM from "react-dom";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { BrowserRouter } from "react-router-dom";

import ElementDemos from "./ElementDemos";

import SplitForm from "./SplitForm";

import "./styles.css";

const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");
// const Wrapper = (props) => (
//   <Elements stripe={stripePromise}>
//         <SplitForm {...props} />
//       </Elements>
// );


const demos = [
  
  {
    path: "/split-card-elements",
    label: "Split Card Elements",
    component: SplitForm
  }
  
];

const Card = () => {
  return (
      <Elements stripe={stripePromise}>
        stripe notes
        <ElementDemos demos={demos} />
      </Elements>
  );
};

// const rootElement = document.getElementById("root");

// ReactDOM.render(<App />, rootElement);
export default Card;
