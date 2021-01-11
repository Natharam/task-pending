import React from "react";
import "./table.css";
import { investedAmount } from "../../investedData";

function Table() {
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>SCRIP</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Avg. Cost</th>
            <th>Invested Amount</th>
            <th>Portfolio Value</th>
            <th>Unrealized P&L</th>
            <th>% Return</th>
          </tr>
        </thead>
        <tbody>
          {investedAmount.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.scrip}</td>
                <td>{item.quantity}</td>
                <td>${item.price}</td>
                <td>${item.avgCost}</td>
                <td>${(item.avgCost*item.quantity).toFixed(2)}</td>
                <td>{item.portfolioValue}</td>
                <td>${item.unrealizedPL}</td>
                <td>{item.return}%</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
