/**
 * @param {number} N
 * @return {number}
 */
var bitwiseComplement = function(N) {

    if (N === 0) {
        return 1;
    }
    var temp = N;
    var binary = "";
    while (temp > 0) {
        if (temp % 2 == 0) {
            binary = "1" + binary;
        } else {
            binary = "0" + binary;
        }
        temp = Math.floor(temp / 2);
    }

    return parseInt(binary, 2);
};

console.log(bitwiseComplement(5)); // 2
console.log(bitwiseComplement(0)); // 2
// 101
// 010