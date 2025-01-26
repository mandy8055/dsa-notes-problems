// T.C: O(n), S.C: O(1)
function maxProfit(prices: number[]): number {
  const len = prices.length;
  let min = prices[0],
    ans = 0;
  for (let i = 1; i < len; i++) {
    const cost = prices[i] - min;
    ans = Math.max(cost, ans);
    min = Math.min(min, prices[i]);
  }
  return ans;
}
