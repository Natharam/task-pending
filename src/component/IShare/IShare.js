import React from "react";
import './ishare.css';

function IShare() {
  return (
    <div className="ishare">
      <div className="menu-bar">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="itot-value">
        <h5>ITOT</h5>
        <p>
          <span>$</span> 100
        </p>
      </div>
      <div className="ishare-details">
        <h4>iShare</h4>
        <p className="first"><strong>S&P 500 Index</strong></p>
        <p className="last">Lorem ipsum dolor.</p>
      </div>
    </div>
  );
}

export default IShare;
