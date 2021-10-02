import {useParams} from "react-router-dom";
import { useState, useEffect} from "react";
import axios from "axios";
import Form from "../Form";
import Button from '../Button';
import { Link } from 'react-router-dom';

export default function Payment() {
  const [data,setData] = useState({});


  useEffect(() => { 
    axios.get(`/api/v1/booking/:id`)
    .then(response => {
         setData(response.data.data.YogaSession)
    })  
  
  },[])

  

  return <div>
    <h1> Hello</h1>
    
      <article>
          
    <h1>
        {data.name}
    </h1>
        {data.duration}
        {data.price}
    </article>
    
    

      <Link to={`/payment`}>
                        <div className="button">
                    <Button>Pay Now</Button>
                    </div>  
                    </Link>
  </div>
};
