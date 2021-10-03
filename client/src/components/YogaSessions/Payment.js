import Button from '../Button';
import { Link } from 'react-router-dom';
import "./Payment.scss";

export default function Payment(props) {
  
  return (
  <div>
      <article className="pay-container">
        <h3 className="title">
            {props.name}
            <p className-="duration">
        {props.duration}
        </p>
        <p className="price">
        {props.price}
        </p>
        <p className="date">
        {props.date}
        </p>
        </h3>
        
      </article>
      <Link to={`/card`}>
            <div className="button">
        <Button>Pay Now</Button>
        </div>  
        </Link>
  </div>
  )
};

// import Button from '../Button';
// import { Link } from 'react-router-dom';

// export default function Payment(props) {
  
//   return (
//   <div>
//       <article>
//         <h1>
//             {props.name}
//         </h1>
//         {props.duration}
//         {props.price}
//         {props.date}
//       </article>
//       <Link to={`/card`}>
//             <div className="button">
//         <Button>Pay Now</Button>
//         </div>  
//         </Link>
//   </div>
//   )
// };