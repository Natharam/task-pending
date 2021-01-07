import { investedData } from "../investedData";
import { marketData } from "../marketData";

initData = {
  investedData,
  marketData,
};

const todoData = (state = initData, action) => {
  switch (action.type) {
    case "MARKET_VALUE":
      let marketValue = action.payload.marketValue;
      state.marketData[action.payload.id].marketValue = marketValue;
      let investedAmount = action.payload.investedAmount;
      state.marketData[action.payload.id].investedAmount = investedAmount;
      return state;

    case "INVERSTED_AMOUNT":
      let investedAmount = action.payload.investedAmount;
      state.investedData[action.payload.id].investedAmount = investedAmount;
      return state;
    default:
      return state;
  }
};

export default todoData;
