

import "./Map.scss";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
  GoogleMap, 
  LoadScript,
  Marker,
  InfoWindow,
  useLoadScript
} from '@react-google-maps/api';
require('dotenv').config();


// export default function Map() {
//   const [data,setData] = useState({
//     center: []
//   });

//   const [selectedCenter, setSelectedCenter] = useState(null);

//   const containerStyle = {
//     width: '1500px',
//     height: '200px'
//   };
  
//   const center = {
//     lat: 34.04,
//     lng: -118.45
//   };
  
//   useEffect(() => { 
//     axios.get("/api/v1/center")
//     .then(function (response) {
//      setData(prev => ({...prev,center: response.data.data.YogaCenter}))
//     })    
//   },[])

//     return(
// <div id="map-container-google-2" className="z-depth-1-half map-container height: 500px">
//   <iframe title="map" width="100%" height="500%" src="https://maps.google.com/maps?q=chicago&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0 border:0" allowfullscreen></iframe>
// </div>

//     )

export default function MyComponent() {
  const [data,setData] = useState({
    center: []
  });

  const [selectedCenter, setSelectedCenter] = useState(null);

  const containerStyle = {
    width: '1500px',
    height: '500px'
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
    <div>
    <LoadScript
      // googleMapsApiKey="AIzaSyA6iT8gjYi2x_wDX62tLY8Na1dfKZhuhgY"
      googleMapsApiKey="AIzaSyCx7Sq5vSJRXIBx2C8UFgYfmwFpVPFNzH0"

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

// import React from 'react'
// import { GoogleMap, LoadScript } from '@react-google-maps/api';

// const containerStyle = {
//   width: '1500px',
//   height: '200px'
// };

// const center = {
//   lat: 51.2538,
//   lng: 85.3232
// };

// function MyComponent() {
//   return (
//     <LoadScript
//       googleMapsApiKey="AIzaSyA6iT8gjYi2x_wDX62tLY8Na1dfKZhuhgY"
//     >
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         center={center}
//         zoom={10}
//       >
//         <></>
//       </GoogleMap>
//     </LoadScript>
//   )
// }

// export default React.memo(MyComponent)

