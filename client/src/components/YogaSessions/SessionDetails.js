import {useParams} from "react-router-dom";
import { useState, useEffect} from "react";
import axios from "axios";
import Form from "../Form";
export default function SessionDetails() {
  const {id}=useParams()
  const [data,setData] = useState({});
  const [positionsData,setPositionsData] = useState([]);


  useEffect(() => { 
    axios.get(`/api/v1/sessions/${id}`)
    .then(response => {
      console.log(response.data.data.YogaSession);
      
      setData(response.data.data.YogaSession)
      // response.data.data.YogaSession.yoga_positions.forEach(positionid => {
      //   axios.get(`/api/v1/positions/${positionid}`)
      //   .then((response) => {
      //     setPositionsData(prev => [...prev,response.data.data.YogaPosition])
      //   })  
      // })
    })  
  
  },[])

  

  return <div>
    
      <article>
        <div className="service-image-container">
        <img src={data.picture} alt=""/>
        </div>
        <h1>
          {data.name}
        </h1>
        {data.description}
        {data.duration}
        {data.price}
    </article>
    <h2>Positions</h2>
    {positionsData.map(position => (
      <article>  
        <h4>
            {position.name}
        </h4>
        <iframe width="300" height="150" src={`https://www.youtube.com/embed/${position.video}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        {position.description}
     </article>
    ))}

      <Form />
  </div>
};
