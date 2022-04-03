import React from "react";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function PlaceCard({ itemDetails }) {
  const navigate = useNavigate();
  const { id, imgUrl, title, subtitle } = itemDetails;
  return (
    <div className="card" key={id} style={{ margin: 18, marginBottom: 80 }}>
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={imgUrl} alt={title} />
        </figure>
      </div>
      <div className="card-content">
        <div class="media">
          <div class="media-content">
            <Link to={{ pathname: `/place-details` }} state={itemDetails}>
              <p style={{ color: "hsl(204, 86%, 53%)" }} className="title is-4">
                {title}
              </p>
            </Link>
          </div>
        </div>
      </div>

      <div className="card-content">{subtitle}</div>
    </div>
  );
}

export default PlaceCard;
