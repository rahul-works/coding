/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    const rows      = word1.length + 1;
    const columns   = word2.length + 1;
    let digestMap = Array(rows).fill().map(() => Array(columns).fill(0));
    for (let i = 0; i<columns; i += 1) {
        digestMap[0][i] = i; 
    }
    
    for (let i = 0; i<rows; i += 1) {
        digestMap[i][0] = i; 
    }
    console.log(digestMap);
    for (let row = 1; row < rows; row += 1) {
        for (let col = 1; col < columns; col += 1) {
            if (word1[row-1] === word2[col-1]) {
                digestMap[row][col] = digestMap[row-1][col-1];
            } else {
                digestMap[row][col] = Math.min(digestMap[row-1][col-1], 
                                                digestMap[row][col-1],
                                                digestMap[row-1][col]) + 1;
            }
        }
    }
    console.log(digestMap);
    return digestMap[rows-1][columns-1];
};

// console.log(minDistance("horse"
// , "ros"));
console.log(minDistance("intention"
, "execution"));