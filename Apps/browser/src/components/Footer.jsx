import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="footer py-3 has-background-grey-lighter">
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
