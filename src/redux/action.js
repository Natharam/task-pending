export const MARKET_VALUE = "MARKET_VALUE";
export const INVERSTED_AMOUNT = "INVERSTED_AMOUNT";

export const marketValue = (payload) => {
  return {
    type: "MARKET_VALUE",
    payload
  };
};

export const investedAmount = (payload) => {
  return {
    type: "INVERSTED_AMOUNT",
    payload
  };
};
