// import './Application.css.css';
import useApplicationData from '../hook/useApplicationData';
import YogaSession from './YogaSession';

const App = () => {
//   const {
//       state,
//       dispatch
//   } = useApplicationData();
//   console.log("state",state);
//     const userList = state.users.map((user) => (<li key={user.id} > {user.first_name} {user.last_name} {user.email} </li>
// ));
  return (
    // <div className="App" >
    //   <h1> Users </h1>

    //   <ul> {userList} </ul>
    // </div >
    <YogaSession></YogaSession>
  );
};


export default App;
