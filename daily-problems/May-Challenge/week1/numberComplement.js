/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    const binary = num.toString(2);
    const complementNum = binary.split('').map(n => {return n^1?1:0}).join('');
    return parseInt(complementNum, 2).toString(10);
};

console.log(findComplement(5));
console.log(findComplement(8));