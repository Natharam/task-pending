import React from "react";
import IShare from "../IShare/IShare";
import Amounts from "../Amounts/Amounts";
import MarketValue from "../MarketValue/MartketValue";
import UnRealized from "../Unrealized/Unrealized";
import Buttons from "../Buttons/Buttons";

import "./itot.css";

function ITOT() {
  return (
    <div className="itot">
      <IShare />
      <Amounts />
      <MarketValue />
      <UnRealized />
      <Buttons />
    </div>
  );
}

export default ITOT;
