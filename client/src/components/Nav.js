import React from "react";
import "./Nav.scss";

export default function Nav() {
    return (
        <nav className="navbar n navbar-expand-md navbar-dark bg-primary d-flex space-between">
        <a className="navbar-brand" href="#">
          <img src= "" className="d-inline-block" alt="" />
          Relax Melodies
        </a>
        <div className="collapse navbar-collapse justify-content-start" id="navbarSupportedContent"/>
          <div className="navbar-nav">
             <a className="nav-item nav-link" href="/"> Home</a>
             <a className="nav-item nav-link" href="/book_online"> Book-Online</a>
             <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
              <div className="navbar-nav"></div>
                <a className="nav-item nav-link" href="/login"><b>Login</b></a>
                <a className="nav-item nav-link" href="/register"><b>Register</b></a>
              </div>
            </div>
          </nav>
    )

}