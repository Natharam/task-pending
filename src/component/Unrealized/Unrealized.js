import React from "react";
import './unrealized.css';

function Unrealized() {
  return (
    <div className="unrealized">
      <div className="unrealized-value">
        <strong>Unrealized P/L</strong>
        <span>
          <strong>$2805.58</strong>
        </span>
      </div>
      <div className="return">
        % Return
        <i class="fas fa-sort-up"></i>
        <span>
          <strong>10%</strong>
        </span>
      </div>
      <div className="line">
        <div></div>
      </div>
    </div>
  );
}

export default Unrealized;
