//121. https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

var maxProfit = function (prices) {
  let minStockPrice = prices[0];
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    minStockPrice = Math.min(minStockPrice, prices[i]);
    maxProfit = Math.max(prices[i] - minStockPrice, maxProfit);
  }

  return maxProfit;
};
