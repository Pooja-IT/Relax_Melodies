import './App.css';
import useApplicationData from './hook/useApplicationData';
// import Home from './components/Home';
import Nav from './components/Nav';
import Slider from './components/Slider';
import Footer from './components/Footer';
import Map from './components/Map';
import Body from './components/Body';
import About from './components/About';


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
  {/* <Home /> */}
  <Nav />
  <Slider />
  <About />
  <Body />
  <Map />
  <Footer />
  
 
</div >
);
};


export default App;
