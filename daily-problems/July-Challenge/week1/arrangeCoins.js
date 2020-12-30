/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let stopper = 0;
    let star = 1;
    let row = 0;
    for (let i = 1; i <= n; i += row+1) {
        if (i >= stopper+star) {
            star += 1;
            row += 1
            stopper = i;
        }
    }
    return row;
};
module.exports = arrangeCoins;
// console.log(arrangeCoins(5));
// console.log(arrangeCoins(8));
// console.log(arrangeCoins(1350490027));
// 51970