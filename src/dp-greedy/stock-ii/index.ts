// Approach 1(Recursion + memoization) T.C: O(2*n), S.C: O(2 * n + n) extra n for stack space
function maxProfit1(prices: number[]): number {
  const len = prices.length;

  const map = new Map<string, number>(); // params, profit
  // Recursive function to calculate the maximum profit
  const solve = (i: number, buy: number): number => {
    // Base case
    if (i === len) {
      return 0;
    }
    const key = `${i},${buy}`;

    // Check if the result for the current indices is already calculated
    if (map.has(key)) {
      return map.get(key)!;
    }

    let profit: number = 0;

    if (buy === 0) {
      // We can buy the stock
      profit = Math.max(
        0 + solve(i + 1, 0), // Don't buy
        -prices[i] + solve(i + 1, 1), // Buy
      );
    }

    if (buy === 1) {
      // We can sell the stock
      profit = Math.max(
        0 + solve(i + 1, 1), // Don't sell
        prices[i] + solve(i + 1, 0), // Sell
      );
    }

    map.set(key, profit!);

    return profit;
  };

  // Calculate and return the maximum profit
  return solve(0, 0);
}

// Approach 2(Tabulation), S.C: O(n*2), time is same O(2*n)
function maxProfit2(prices: number[]): number {
  const len = prices.length;

  // Create a 2D array to store dynamic programming values
  const dp = Array.from({ length: len + 1 }, () => new Array(2).fill(-1));

  // Base condition
  dp[len][0] = dp[len][1] = 0;

  for (let i = len - 1; i >= 0; i--) {
    for (let buy = 0; buy <= 1; buy++) {
      let profit;

      if (buy === 0) {
        // We can buy the stock
        profit = Math.max(
          0 + dp[i + 1][0], // Don't buy
          -prices[i] + dp[i + 1][1], // Buy
        );
      }

      if (buy === 1) {
        // We can sell the stock
        profit = Math.max(
          0 + dp[i + 1][1], // Don't sell
          prices[i] + dp[i + 1][0], // Sell
        );
      }

      dp[i][buy] = profit;
    }
  }

  return dp[0][0];
}

// Approach 3 S.C: O(1), T.C: O(2*n)
function maxProfit3(prices: number[]): number {
  const len = prices.length;

  // Initialize two arrays to store dynamic programming values for the current and ahead states
  const ahead: [number, number] = [0, 0];
  const cur: [number, number] = [0, 0];

  // Base condition
  ahead[0] = ahead[1] = 0;

  for (let i = len - 1; i >= 0; i--) {
    for (let buy = 0; buy <= 1; buy++) {
      let profit: number = 0;

      if (buy === 0) {
        // We can buy the stock
        profit = Math.max(
          0 + ahead[0], // Don't buy
          -prices[i] + ahead[1], // Buy
        );
      }

      if (buy === 1) {
        // We can sell the stock
        profit = Math.max(
          0 + ahead[1], // Don't sell
          prices[i] + ahead[0], // Sell
        );
      }
      cur[buy] = profit;
    }

    // Update the ahead array with the values from the cur array for the next iteration
    ahead[0] = cur[0];
    ahead[1] = cur[1];
  }

  return cur[0];
}
