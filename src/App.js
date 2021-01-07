import React from "react";
import ITOT from "./component/ITOT/ITOT";
import EFA from "./component/EFA/EFA";
import Table from "./component/Table/Table";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="sample-data">
        <div className="show-data">
          <ITOT />
          <div className="divide-horizental"></div>
          <EFA />
        </div>
        <div className="divide-vertical" />
      </div>
      <Table />
    </div>
  );
}

export default App;
