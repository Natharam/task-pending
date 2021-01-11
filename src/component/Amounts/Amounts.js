import React from "react";
import "./amounts.css";

function Amounts() {
  return (
    <div className="amount">
      <div className="keys">
        <div className="quantity">
          <i className="fa fa-box icon"></i> Quantity
        </div>
        <div className="avg-cost">@ Avg. Cost</div>
        <div className="quantity">
          <i className="fas fa-hand-holding-usd icon"></i> Invested Amt
        </div>
      </div>
      <div className="values">
        <div className="quantity">
          <span>150</span>
        </div>
        <div className="avg-cost">
          <span>$44.9</span>
        </div>
        <div className="quantity">
          <span>$6736.09</span>
        </div>
      </div>
    </div>
  );
}

export default Amounts;
