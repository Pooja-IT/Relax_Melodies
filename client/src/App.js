// import './App.css';
import React, { Fragment, useState } from 'react';

import useApplicationData from './hook/useApplicationData';
import YogaSessions from './components/YogaSessions';
import Register from './components/Register';
import Login from './components/Login';

import Home from './components/Home';
import Nav from './components/Nav';
import Footer from './components/Footer';
// import Form from './components/Form';
import SessionDetails from './components/YogaSessions/SessionDetails';
import Payment from './components/YogaSessions/Payment';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";


const App = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };


  const {
      state,
      dispatch
  } = useApplicationData();
  console.log("state",state);
//     const userList = state.users.map((user) => (<li key={user.id} > {user.first_name} {user.last_name} {user.email} </li>
// ));
return (<div className="App" >
  {/* <h1> Users </h1> */}

  {/* <ul> {userList} </ul> */}
  <Router>
    <Nav />
    <Switch >
      {/* <Route exact path="/" component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
      <Route exact path="/book-online" component={YogaSessions}/>
      <Route path="/book-online/:id" component={SessionDetails}/>
      <Route path="/payment" component={Payment}/> */}
      
      <Route exact path="/" render={props => <Home {...props} />} />
      <Route path="/login" render={props => !isAuthenticated ? <Login {...props} setAuth={setAuth} /> : <Redirect to="/" />} />
      <Route path="/register" render={props => !isAuthenticated ? <Register {...props} setAuth={setAuth} /> : <Redirect to="/login" />} />
      <Route exact path="/book-online" render={props => isAuthenticated ? <YogaSessions {...props} setAuth={setAuth} /> : <Redirect to="/login" />} />
      <Route path="/book-online/:id" render={props => isAuthenticated ? <SessionDetails {...props} setAuth={setAuth} /> : <Redirect to="/login" />} />
      <Route path="/payment" render={props => isAuthenticated ? <Payment {...props} setAuth={setAuth} /> : <Redirect to="/login" />} />
      
    </Switch>
    <Footer />
  </Router> 
</div >
);
};

export default App;
