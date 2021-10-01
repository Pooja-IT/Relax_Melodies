// import './App.css';

import useApplicationData from './hook/useApplicationData';
import YogaSessions from './components/YogaSessions';
import Register from './components/Register';
import Login from './components/Login';

import Home from './components/Home';
import Nav from './components/Nav';
import Footer from './components/Footer';
// import Form from './components/Form';
import SessionDetails from './components/YogaSessions/SessionDetails';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


const App = () => {
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
      <Route exact path="/" component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
      <Route exact path="/book-online" component={YogaSessions}/>
      <Route path="/book-online/:id" component={SessionDetails}/>
      
    </Switch>
    <Footer />
  </Router> 
</div >
);
};

export default App;
