import React from "react";
import './table.css';
import tableData from "./tableData";

function Table() {
  return (
    <div className="table">
      <table>
        <tr>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Age</th>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Age</th>
          <th>Lastname</th>
          <th>Age</th>
        </tr>
        <tableData />
        <tableData />
        <tableData />
        <tableData />
        <tableData />
        <tableData />
        <tableData />
      </table>
    </div>
  );
}

export default Table;
