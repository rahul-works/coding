/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    let digest = Array(amount+1).fill(0);
    digest[0] = 1;
    for (const coin of coins) {
        for (let i = coin; i < amount+1; i += 1) {
            digest[i] += digest[i-coin];
        }
    }
    return digest[amount];
};
module.exports = change;
// console.log(change(5
//     , [1,2,5]));

