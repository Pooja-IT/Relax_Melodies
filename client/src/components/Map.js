// import React from "react";

// import "./Map.scss";

// export default function Map() {
//     return(
// <div id="map-container-google-2" className="z-depth-1-half map-container height: 500px">
//   <iframe title="map" width="100%" height="500%" src="https://maps.google.com/maps?q=chicago&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0 border:0" allowfullscreen></iframe>
// </div>

//     )
// }

import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { 
  GoogleMap, 
  LoadScript,
  Marker,
  InfoWindow,
  useLoadScript
} from '@react-google-maps/api';
require('dotenv').config();

function MyComponent() {
  
  const [data,setData] = useState({
    center: []
  });

  const [selectedCenter, setSelectedCenter] = useState(null);

  const containerStyle = {
    width: '1500px',
    height: '200px'
  };
  
  const center = {
    lat: 34.04,
    lng: -118.45
  };
  
  useEffect(() => { 
    axios.get("/api/v1/center")
    .then(function (response) {
     setData(prev => ({...prev,center: response.data.data.YogaCenter}))
    })    
  },[])


  return (
    <div className="yoga">
    <LoadScript
      googleMapsApiKey
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={11.3}
      >
        {data.center.map(center => (
          <Marker 
          key={center.id} 
          position={{lat: center.lat, lng: center.lng }} 
          onClick={() => {
            setSelectedCenter(center);
          }}
          />
        ))}
        {selectedCenter && (
          <InfoWindow
          position={{lat: selectedCenter.lat, lng: selectedCenter.lng }} 
          onCloseClick={() => {
            setSelectedCenter(null);
          }}
          >
            <div>
              <h5>{selectedCenter.name}</h5>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
    </div>
  )
}

export default React.memo(MyComponent)

