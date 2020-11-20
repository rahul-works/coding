/**
 * @param {number[]} prices
 * @return {number}
 */
const NONE = 0;
const BUY = 1;
const SELL = 2;
var maxProfit = function(prices) {
    let profit = 0;
    let transaction = NONE;
    let buyPrice = 0;
    if (prices === undefined || prices.length === 0) {
        return profit;
    }
    for(const item in prices){
        if (transaction === NONE) {
            if (prices[item] < prices[[parseInt(item)+1]]) {
                transaction = BUY;
                buyPrice = prices[item];
                console.log(prices[item] + ' - '+ prices[[parseInt(item)+1]] +' : BUY');
            }
        } else if (transaction === BUY) {
            if (prices[item] > prices[parseInt(item)+1]) {
                transaction = SELL;
                profit += prices[item] - buyPrice;
                console.log(prices[item] + ' - '+ prices[[parseInt(item)+1]] +' : SELL');
                transaction = NONE; 
            } else if(parseInt(item) === prices.length-1){
                console.log('last item');
                profit += prices[item] - buyPrice;
            }
        }
    }
    return profit;
};

// maxProfit([7,1,5,3,6,4]);
// maxProfit([1,2,3,4,5]);
maxProfit([7,6,4,3,1]);