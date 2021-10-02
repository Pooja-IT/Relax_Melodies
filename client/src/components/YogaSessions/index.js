import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './index.scss';
import { Link } from 'react-router-dom';

export default function YogaSessions() {
  const [data,setData] = useState({
    sessions: []
  });

  useEffect(() => { 
    axios.get("/api/v1/sessions")
    .then(function (response) {
     setData(prev => ({...prev,sessions: response.data.data.YogaSessions}))
    })    
  },[])

  return (
  <div className="sevices-container">
    {data.sessions.map(element => (
    <article className="article-container">
      <div className="service-image-container">
        <Link to={`/book-online/${element.id}`}>
          <img src={element.picture} alt=""/>
        </Link>
      </div>
      <h1 className="name-container">
        {element.name}
      </h1>
      <p className="desc-container">
      {element.description}
      </p>
      <p className="duration-container">
      {element.duration}
      </p>
      <p className="price-container">
      {element.price}
      </p>
      <Link to={`/book-online/${element.id}`}>
        <div className="button">
          <button className="button-container">Book Now</button>
          {/* <Button>Book Now</Button> */}
        </div>  
      </Link>
    </article>
    ))}
    
  </div>
  );
}