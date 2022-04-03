import React from "react";
import { useLocation } from "react-router-dom";

function Footer() {
  const year = new Date().getFullYear();
  const location = useLocation();

  return (
    <div
      style={{ marginTop: location.pathname === "/place-details" ? 800 : 0 }}
      className="footer py-3 has-background-grey-lighter"
    >
      <div className="container">
        <div className="content has-text-centered">
          <span>Copyrights Reserved ⓒ {year}</span>
          <br />
          <span>Developed by Tazalli Tasnim</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
