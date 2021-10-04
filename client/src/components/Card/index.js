import React from "react";
import ReactDOM from "react-dom";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { BrowserRouter } from "react-router-dom";

import ElementDemos from "./ElementDemos";

import SplitForm from "./SplitForm";

import "../Card/styles.scss";

const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");
const demos = [
  
  {
    path: "/split-card-elements",
    label: "Split Card Elements",
    component: SplitForm
  }
  
];

const Card = () => {
  return (
    <BrowserRouter>
      <Elements stripe={stripePromise}>
        <ElementDemos demos={demos} />
        <SplitForm />
      </Elements> 
    </BrowserRouter>
  );
};
export default Card;
