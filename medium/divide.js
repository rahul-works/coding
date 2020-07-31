/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 * Given two integers dividend and divisor, divide two integers without using multiplication, division and mod operator.

Return the quotient after dividing dividend by divisor.

The integer division should truncate toward zero, which means losing its fractional part. For example, truncate(8.345) = 8 and truncate(-2.7335) = -2.
 */
var divide = function(dividend, divisor) {
    const MAX = 2147483647;
    const MIN = -2147483648;
    let retNum = 0;
    let negative = false;
    if ((dividend<0 && divisor>0) || dividend>0 && divisor<0) {
        negative = true;
    }
    if ((dividend<0 || divisor<0)) {
        dividend = Math.abs(dividend);
        divisor = Math.abs(divisor);
    }
    if (divisor === dividend) {
        retNum = 1;
    } else if (divisor===1) {
        retNum = dividend;
    } else {
        while (divisor <= dividend) {
            retNum += 1;
            dividend -= divisor;
        }
    }

    if ( !negative && retNum > MAX) {
        retNum = MAX;
    }

    if (retNum < MIN) {
        retNum = MIN;
    }
    
    if (negative) {
        return retNum*-1;
    } else {
        return retNum;
    }
};

// console.log(divide(10, 3));
// console.log(divide(7, -3));
// console.log(divide(1, 1));
// console.log(divide(2147483647, 1));
// console.log(divide(-2147483648, -1)); //2147483647
// console.log(divide(-2147483648, 1)); //-2147483648
console.log(divide(2147483648,2));