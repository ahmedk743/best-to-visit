import React from "react";
import { useLocation } from "react-router-dom";
import MyMap from "./MyMap";

function PlaceDetails() {
  const location = useLocation();

  const { id, title, imgUrl, description, position } = location.state;

  return (
    <>
      <div className="card" key={id} style={{ margin: 100, marginBottom: 80 }}>
        <div className="card-image">
          <figure className="image is-3by1">
            <img src={imgUrl} alt={title} />
          </figure>
        </div>
        <div className="card-content">
          <div class="media">
            <div class="media-content">
              <p className="title">{title}</p>
            </div>
          </div>
        </div>

        <div className="card-content">{description}</div>
        <MyMap title={title} position={position} />
      </div>

      {/* MAP */}
    </>
  );
}

export default PlaceDetails;
