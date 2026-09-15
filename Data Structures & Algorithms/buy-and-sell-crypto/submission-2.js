class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let max_profit = 0;
        let l = 0;
        let r = 1;
        while(r < prices.length){
            if(prices[l] < prices[r]){
                max_profit = Math.max(max_profit, prices[r]-prices[l])
            }
            else{
                l =r
            }
            r += 1;
        }
        return max_profit;
    }
}
