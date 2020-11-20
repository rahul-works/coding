let priceArray = [];
var StockSpanner = function() {
    priceArray = [];
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    let sum = 1;
    for (const num of priceArray) {
        if(price < num) {
            sum = 1;
        }  
        if (price !== num) {
            if (price > num) {
                sum += 1;
            }  
        } else {
            sum += 1;
        }
    }
    priceArray.push(price);
    return sum;
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */