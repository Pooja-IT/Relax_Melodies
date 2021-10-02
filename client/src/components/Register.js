import { useState } from "react";
import "./Register.scss";

export default function Register({ setAuth }) {

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: ""
  })

  const { name, email, password } = inputs;

  const onChange = (e) => {
    setInputs({...inputs, [e.target.name] : e.target.value })
  }

  const onSubmitForm = async (e) => {
    e.preventDefault()

    try {

      const body = { name, email, password }
      
      const response = await fetch("/register", {
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify(body)
      })

      const parseRes = await response.json()

      localStorage.setItem("token", parseRes.token);

      setAuth(true);

    } catch (error) {
    }
  }

  return (  
        <div id='register'>
        <form onSubmit={onSubmitForm}>
            <div className="container">
              <div className="row">
                <div className="col-md-6 contents">
                      <div className="col-md-12">
                        <div className="form-block">
                      <h1 className="form-signup">Sign Up</h1>
                      <span>Already a member?</span>
                      <span className="d-block text-center my-4 text-muted">
                            <a href="/login" className="font-weight-bold" ><b>Log In</b></a>
                        </span> 
                            <div className="form-group last mb-4">
                              <label for="name"><b>Name:</b></label>
                              <input name="name" type="name" className="form-control" id="name" value={name} onChange={e => onChange(e)}
                               />
                            </div>
                            <div className="form-group first">
                              <label for="email"><b>Email:</b></label>
                              <input name="email" type="email" className="form-control" id="email" value={email} onChange={e => onChange(e)}
                               />
                            </div>
                            <div className="form-group last mb-4">
                              <label for="password"><b>Password:</b></label>
                              <input name="password" type="password" className="form-control" id="password" value={password} onChange={e => onChange(e)}
                              />
                            </div>
                              <input type="submit" value="Register" className="btn-primary" />
                        </div>
                      </div>
                  </div>
                </div>
              </div>
        </form>
      </div>
  )
};