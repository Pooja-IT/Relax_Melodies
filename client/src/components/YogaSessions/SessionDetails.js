import {useParams} from "react-router-dom";
import { useState, useEffect} from "react";
import axios from "axios";
import Form from "../Form";
export default function SessionDetails() {
  const {id}=useParams()
  const [data,setData] = useState({});

  useEffect(() => { 
    axios.get(`/api/v1/sessions/${id}`)
    .then(function (response) {
      console.log(response.data.data.YogaSession);
         setData(response.data.data.YogaSession)

    })    
  },[id])

  return <div>
    
      <article>
        <div className="service-image-container">
        <img src={data.picture} alt=""/>
        </div>
        
    <h1 className="name-container">
        {data.name}
    </h1>
    <p className="desc-container">
        {data.description}
    </p>
    <p className="duration-container">
        {data.duration}
    </p>
    <p className="price-container">
        {data.price}
    </p>
        
    </article>
      <Form />

  </div>
};
