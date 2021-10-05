import React from "react";
import "./Footer.scss";
import { Button } from "react-bootstrap";

export default function Footer() {
    return(
        <footer className="footer bg-primary">
        <div className="container">
          <span className="text-white">Sign up for inspiration, exclusive offers, contests and the inside scoop on events.</span>
          </div>
          <div className="Email-container">
          <input type="email" name="EMAIL" className="form-control" placeholder="Enter your Email Address"/>
          <Button onClick={ () => {console.log("Click on Subscribe")}}>Subscribe</Button>
          </div>
          
      </footer>
    )
}