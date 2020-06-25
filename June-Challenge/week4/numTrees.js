/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    let catalan = [];
    catalan[0] = catalan[1] = 1;
    
    for(let i=2; i<=n; i+=1) {
        catalan[i] = 0;
        for(let j=0; j<i; j+=1) {
            catalan[i] += catalan[j]*catalan[i-j-1];
        }
            
    }
    return catalan[n];
};

// console.log(numTrees(3));
module.exports = numTrees;