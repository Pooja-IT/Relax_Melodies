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
            <i className="fas fa-exclamation"></i>
          </h1>
        </section>
        <div className="sevices-container">
    {data.sessions.map(element => (
    <article className="article-container">
      <div className="service-image-container">
          <img src={element.picture} alt=""/>
      </div>
      <h1>
        {element.name}
      </h1>
      {element.description}
      {element.duration}
      {element.price}
    </article>
    ))}
  </div>    
      </>
        )
}