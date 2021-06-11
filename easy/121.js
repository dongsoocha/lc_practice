var maxProfit = function (prices) {
  let min = Infinity;
  let max = 0;
  let profit = 0;
  for (let price of prices) {
    if (price < min) {
      min = price;
      max = min;
    } else {
      if (price > max) {
        max = price;
        if (profit < max - min) {
          profit = max - min;
        }
      }
    }
  }
  return profit;
};
