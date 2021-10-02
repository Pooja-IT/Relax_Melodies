import "./Register.scss";
// import { useCookies } from 'react-cookie';


export default function Register(props) {
  // const [cookies, setCookie] = useCookies(['name', 'id']);

  function handleSubmit(){
    console.log("submit");
  }
  return (  
        <div id='register'>
        <form action="http://localhost:3001/register" method="post" onClick={ handleSubmit()} >
            <div className="container">
              <div className="row justify-content-center">
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
                              <input name="name" type="name" className="form-control" id="name"
                               />
                            </div>
                            <div className="form-group last mb-4">
                              <label for="Number"><b>Phone:</b></label>
                              <input name="Number" type="Number" className="form-control" id="Number"
                               />
                            </div>
                            <div className="form-group first">
                              <label for="email"><b>Email:</b></label>
                              <input name="email" type="email" className="form-control" id="email"
                               />
                            </div>
                            <div className="form-group last mb-4">
                              <label for="password"><b>Password:</b></label>
                              <input name="password" type="password" className="form-control" id="password"/>
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