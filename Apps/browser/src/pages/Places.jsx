import React from "react";
import PlaceCard from "../components/PlaceCard";
import { places } from "../assets/data";

function Places() {
  return (
    <div style={{ margin: 85 }}>
      <div className="columns">
        <div className="column is-one-third">
          <PlaceCard itemDetails={places[0]} />
          <PlaceCard itemDetails={places[1]} />
        </div>
        <div className="column is-one-third">
          <PlaceCard itemDetails={places[2]} />
          <PlaceCard itemDetails={places[3]} />
        </div>
        <div className="column is-one-third">
          <PlaceCard itemDetails={places[4]} />
          <PlaceCard itemDetails={places[5]} />
        </div>
      </div>
    </div>
  );
}

export default Places;
