import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Button from '../Button';
import './index.scss';
import { Link } from 'react-router-dom';



export default function YogaSessions(props) {
  const [data,setData] = useState({
    sessions: []
  });

  useEffect(() => { 
    axios.get("/api/v1/sessions")
    .then(function (response) {
      console.log(response.data);
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
      <h1>
        {element.name}
      </h1>
      {element.description}
      {element.duration}
      {element.price}
      <Link to={`/book-online/${element.id}`}>
        <div className="button">
          <Button>Book-Online</Button>
        </div>  
      </Link>

    </article>
    ))}
    
  </div>
  );
}