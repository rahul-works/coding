/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    if (n === 0) {
        return 0;
    }
    
    let uglyNumbers = [];
    uglyNumbers.push(1);
    
    let counter2 = 0;
    let counter3 = 0;
    let counter5 = 0;
    
    while (uglyNumbers.length < n) {
        let temp2 = uglyNumbers[counter2] * 2;
        let temp3 = uglyNumbers[counter3] * 3;
        let temp5 = uglyNumbers[counter5] * 5;
        
        let minNum = Math.min(temp2, Math.min(temp3,temp5));
        uglyNumbers.push(minNum);
        
        if(minNum === temp2) {
            counter2++;
        }
        if(minNum === temp3) {
            counter3++;
        }
        if(minNum === temp5) {
            counter5++;
        }
    }
    return uglyNumbers[uglyNumbers.length-1];
};

// console.log(nthUglyNumber(10));
// console.log(nthUglyNumber(11));
module.exports = nthUglyNumber;