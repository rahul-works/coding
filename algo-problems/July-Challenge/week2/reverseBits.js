/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
function zeroPad(num, places) {
    var zero = places - num.toString().length + 1;
    return Array(+(zero > 0 && zero)).join("0") + num;
}
var reverseBits = function(n) {
    let binaryNumber = n.toString(2);
    if (n.toString(2).length < 32) {
        binaryNumber = zeroPad(n.toString(2), 32);
    }
    return parseInt( binaryNumber.split("").reverse().join(""), 2 );
};

// console.log(reverseBits(43261596));
module.exports = reverseBits;