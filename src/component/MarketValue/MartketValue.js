import React from "react";
import './marketvalue.css';

function MartketValue() {
  return (
    <div className="martketvalue">
      <div className="value">
        <strong>Market Value</strong>
        <span>
          <strong>$9542.56</strong>
        </span>
      </div>
      <div className="portfolio-value">
        % of portfolio value
        <span>
          <strong>40%</strong>
        </span>
      </div>
      <div className="line">
          <div></div>
      </div>
    </div>
  );
}

export default MartketValue;
