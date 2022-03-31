import React from "react";

import { Map, GoogleApiWrapper } from "google-maps-react";

function MyMap(props) {
  return (
    <Map
      google={props.google}
      style={{ width: "50%", height: "50%", marginTop: 100 }}
      zoom={13}
      initialCenter={{
        lat: 43.653225,
        lng: -79.383186,
      }}
    />
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBUu6p-m9CRnFCOJ3ZMyypYdCyT-4gnDf4",
})(MyMap);
