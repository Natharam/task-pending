import React from "react";
import IShare from "../IShare/IShare";
import Amounts from "../Amounts/Amounts";
import MarketValue from "../MarketValue/MartketValue";
import UnRealized from "../Unrealized/Unrealized";
import Buttons from "../Buttons/Buttons";

import "./efa.css";

function EFA() {
  return (
    <div className="efa">
      <IShare />
      <Amounts />
      <MarketValue />
      <UnRealized />
      <Buttons />
    </div>
  );
}

export default EFA;
