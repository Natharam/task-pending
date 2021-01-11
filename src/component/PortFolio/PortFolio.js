import React from "react";
import "./portfolio.css";

function PortFolio() {
  return (
    <div className="portfolio">
      <div className="portfolio-header">
        <div>
          <h4>PortFolio</h4>
        </div>
        <div>
          <select name="select" id="select">
            <option value="Assest-wise">Assest-wise</option>
          </select>
        </div>
      </div>
      <div className="graph">
        <div className="outer_circle">
          <div className="inner_circle"></div>
        </div>
        <div className="data">
          <span></span>
          <p>Mutual Funds</p>
          <span></span>
          <p>EFTs</p>
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
