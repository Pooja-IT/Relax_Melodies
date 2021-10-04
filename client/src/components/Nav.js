import React, { useEffect, useState } from "react";
import "./Nav.scss";
import {
  Link
} from "react-router-dom";

export default function Nav({ setAuth, isAuthenticated }) {

  const [name, setName] = useState("")
  // const [logoutName, setLogoutName] = useState({
  //   login : <Link to="/login" className="nav-item nav-link">Login</Link>,
  //   register: <Link to="/register" className="nav-item nav-link">Register</Link>
  // })

  async function getName() {
    try {
      const response = await fetch("/privateRoute", {
        method: "GET",
        headers: {token: localStorage.token}
      });

      const parseRes = await response.json()
      
      setName(parseRes.name)
      
    } catch (error) {
      console.error(error.message);
    }
  }

  const logout = (e) => {
    e.preventDefault()
    localStorage.removeItem("token")
    setAuth(false);
  }

  useEffect(() => {
    getName()
  },[])

  
  let login
  let register
  const loader = async function () {
    
    if (isAuthenticated === true) {
      login = <Link className="nav-item nav-link" color="black">Logged in as:{name}</Link>;
      register = <Link to="/" className="nav-item nav-link" onClick={e => logout(e)}>Logout</Link>
    } else {
      login = <Link to="/login" className="nav-item nav-link">Login</Link>
      register = <Link to="/register" className="nav-item nav-link">Register</Link>
    }
  }
  loader()


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
            {login}
            {register}
          </div>
        </div>
      </nav>
  )

}