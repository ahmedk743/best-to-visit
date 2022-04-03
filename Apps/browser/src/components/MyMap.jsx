import React from "react";

import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

function MyMap(props) {
  return (
    <Map
      google={props.google}
      style={{
        width: "100%",
        height: "80%",
        position: "absolute",
        marginBottom: 100,
      }}
      zoom={13}
      initialCenter={{
        lat: 43.653225,
        lng: -79.383181,
      }}
    >
      <Marker title={props.title} name={"SOMA"} position={props.position} />
    </Map>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBUu6p-m9CRnFCOJ3ZMyypYdCyT-4gnDf4",
})(MyMap);
