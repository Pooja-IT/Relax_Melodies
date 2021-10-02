import React, { useState } from "react";
import "./Login.scss"

export default function Login({setAuth}) {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // function validateForm() {
  //   return email.length > 0 && password.length > 0;
  // }
  // function handleSubmit(event){
  //   event.preventDefault();
  // }

  const [inputs, setInputs] = useState({
    email: "",
    password: ""
  })

  const { email, password } = inputs;
  
  const onChange = (e) => {
    setInputs({...inputs, [e.target.name] : e.target.value })
  }

  const onSubmitForm = async (e) => {
    e.preventDefault()

    try {

      const body = { email, password }
      
      const response = await fetch("/login", {
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify(body)
      })

      const parseRes = await response.json()

      localStorage.setItem("token", parseRes.token);

      setAuth(true);

    } catch (error) {
      console.error(error.message);
    }
  }



  return (
    <div id="login">
        <form onSubmit={onSubmitForm}>
        <div className="content animate__animated animate__fadeIn animate__slow">
         
            <div className="row justify-content-center">
              <div className="col-md-6 contents">
                <div className="row justify-content-center">
                 
                  <div className="col-md-12">
                    <div className="form-block">
                      <h1>Log In</h1>
                      <span>New to this app?</span>
                      <span className="d-block text-center my-4 text-muted">
                            <a href="/register" className="font" >Sign Up</a>
                        </span> 
                        <div className="form-group first">
                          <label for="email"><b>Email:</b></label>
                          <input name="email" type="text" value={email} onChange={(e) => onChange(e)} className="form-control" />
                        </div>
                        <div className="form-group last mb-4">
                          <label for="password"><b>Password:</b></label>
                          <input name="password" type="password" value={password} onChange={(e) => onChange(e)} className="form-control" />
                        </div>
                        <div>
                        <input type="submit"  value="Log In" className="btn-primary" />
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