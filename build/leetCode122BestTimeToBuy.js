"use strict";
function maxProfit(prices) {
    let buy = 100;
    let sell = 0;
    let max = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < buy) {
            buy = prices[i];
            max = prices[i] - buy;
        }
        else if (max > sell) {
            sell = prices[i] - buy;
            buy = 100;
        }
    }
    return sell + buy;
}
let prices = [1, 2, 3, 4, 5];
console.log(maxProfit(prices));
// console.log(buy, sell);
