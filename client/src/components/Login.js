import React, { useState } from "react";
import "./Login.scss"

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }
  function handleSubmit(event){
    event.preventDefault();
  }
  return (
    <div id="login">
        <form name='name' onSubmit={handleSubmit}>
        <div className="content animate__animated animate__fadeIn animate__slow">
         
            <div className="row justify-content-center">
              <div className="col-md-6 contents">
                <div className="row justify-content-center">
                 
                  <div className="col-md-12">
                    <div className="form-block">
                      <h1>Log In</h1>
                      <span>New to this app?</span>
                      <span className="d-block text-center my-4 text-muted">
                            <a href="/register" className="font-weight-bold" ><b>Sign Up</b></a>
                        </span> 
                        <div className="form-group first">
                          <label for="email"><b>Email:</b></label>
                          <input name="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" />
                        </div>
                        <div className="form-group last mb-4">
                          <label for="password"><b>Password:</b></label>
                          <input name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" />
                        </div>
                        <div>
                        <input type="submit" disabled={!validateForm()} value="Log In" className="btn-primary" />
                        </div>
                      </div>
                    </div>
                
                  </div>
                </div>
              </div>
            </div>
         
            </form>
     </div>
        )
  };