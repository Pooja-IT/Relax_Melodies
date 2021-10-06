import React from "react";
import "./Footer.scss";
// import { Button } from "react-bootstrap";
import MailchimpSubscribe from "react-mailchimp-subscribe";


export default function Footer() {
  const MAILCHIMP_URL =
    "https://f1v.us10.list-manage.com/subscribe/post?u=df6d43b6920424240e3f85b41&amp;id=1bb623a334";

    return(
        <footer className="footer bg-primary">
        <div className="container">
          {/* <a className="navbar-brand" href="/">
          <img src= "/images/logo.png" className="d-inline-block" alt="" />
          </a> */}
            <p className="text-white">Sign up for inspiration, exclusive offers, contests and the inside scoop on events.</p>

          <div className="footer-subscribe">
          <MailchimpSubscribe url={MAILCHIMP_URL} />
          </div>
          
        </div>
      </footer>
    )
}