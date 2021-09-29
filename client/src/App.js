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
   
return (<div className="App" >

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
  
</div >
);
};

export default App;
