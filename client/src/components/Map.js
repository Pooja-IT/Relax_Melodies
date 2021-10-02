// import React from "react";

// import "./Map.scss";

// export default function Map() {
//     return(
// <div id="map-container-google-2" className="z-depth-1-half map-container height: 500px">
//   <iframe title="map" width="100%" height="500%" src="https://maps.google.com/maps?q=chicago&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0 border:0" allowfullscreen></iframe>
// </div>

//     )
// }

import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '1500px',
  height: '200px'
};

const center = {
  lat: 51.2538,
  lng: 85.3232
};

function MyComponent() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyA6iT8gjYi2x_wDX62tLY8Na1dfKZhuhgY"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MyComponent)

