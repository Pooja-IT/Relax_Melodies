import "./Service.scss";
import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function Body() {
  const [data,setData] = useState({
    sessions: []
  });

  useEffect(() => { 
    axios.get("/api/v1/sessions")
    .then(function (response) {
      console.log(response.data);
     setData(prev => ({...prev, sessions: response.data.data.YogaSessions}))
    })    
  },[])
  
    return(
      <>
        <section>
          <h1 className="text">
            Services
          </h1>
        </section>
        <div className="sevices-container">
    {data.sessions.map(element => (
    <article className="article-container">
      <div className="service-image-container">
          <img src={element.picture} alt=""/>
      </div>
      <h3 className="name-service">
        {element.name}
      </h3>
      <p className="description">
        {element.description}
      </p>
      <p className="duration">
        {element.duration}
      </p>
      <p className="price">
        {element.price}
      </p>
    </article>
    ))}
  </div>    
      </>
        )
}