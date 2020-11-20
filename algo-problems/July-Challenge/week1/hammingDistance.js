/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    const xBin = x.toString(2);
    const yBin = y.toString(2);
    let xStr = xBin.split('');
    let yStr = yBin.split('');
    let count = 0;
    if (xBin.length < yBin.length) {
        count = xBin.length;
        while (count < yBin.length ) {
            xStr.unshift('0');
            count += 1;
        }
    } else {
        count = yBin.length;
        while (count < xBin.length ) {
            yStr.unshift('0');
            count += 1;
        }
    }
    count = 0;
    for ( const key in xStr) {
        if (xStr[key] !== yStr[key]) {
            count += 1;
        }
    }
    return count;
};

// console.log(hammingDistance(1, 4)); //2
// console.log(hammingDistance(4, 2)); // 2
module.exports = hammingDistance;