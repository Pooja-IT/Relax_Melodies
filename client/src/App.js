import './App.css';
import Register from './components/Register';
import Login from './components/Login';

import useApplicationData from './hook/useApplicationData';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const App = () => {
  const {
      state,
      dispatch
  } = useApplicationData();
  console.log("state",state);
    // const userList = state.users.map((user) => (<li key={user.id} > {user.first_name} {user.last_name} {user.email} </li>
// ));
return (<div className="App" >
  <h1> Users </h1>

  {/* <ul> {userList} </ul> */}
  <Router>
    <nav>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </nav>
    <Switch>
      <Route path="/login"><Login /></Route>
      <Route path="/register"><Register /></Route>
    </Switch>
  </Router>
  {/* <Register/>
  <Login/> */}
</div >
);
};

export default App;
