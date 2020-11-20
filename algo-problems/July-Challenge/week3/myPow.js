/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

function pow(x, n) {
    if (n === 0) {
        return 1;
    } 
    let temp = pow(x, Math.floor(n/2));
    if (n%2 === 0) {
        return temp*temp;
    } else {
        return x*temp*temp;
    }
}

var myPow = function(x, n) {
    if (n < 0) {
        return 1/pow(x,-n);
    } else {
        return pow(x,n);
    }
};

console.log(myPow(2.00000  , 10));
// console.log(myPow(2.10000, 3));
// console.log(myPow(2.00000, -2));
// console.log(myPow(2.00000, -2147483648));
// console.log(myPow(8.66731, 4)); //5643.354343567187
// console.log(myPow(3.76050
//     , -8));

// console.log(myPow(1.00000
// , 2147483647)); // 1

// console.log(myPow(0.00001
//     , 2147483647));
// console.log(myPow(8.84372
//     , -5))