import React from "react";
import "./Nav.scss";
import {
  Link
} from "react-router-dom";

export default function Nav() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-primary d-flex space-between">
        <a className="navbar-brand" href="/">
          <img src= "" className="d-inline-block" alt="" />
          Relax Melodies
        </a>
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <div className="navbar-nav">
              <Link to="/" className="nav-item nav-link">Home</Link>
              <Link to="/book-online" className="nav-item nav-link">Book Online</Link>
              <Link to="/login" className="nav-item nav-link">Login</Link>
              <Link to="/register" className="nav-item nav-link">Register</Link>
            </div>
          </div>
        </nav>
    )

}