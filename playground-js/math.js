console.log(Math.PI);

console.log(Math.round(4.7));
console.log(Math.round(4.4));

console.log(Math.pow(8, 2));

console.log(Math.sqrt(64));

console.log(Math.abs(-12));

console.log(Math.ceil(4.3));
console.log(Math.floor(4.7));

console.log((Math.sin(0)), Math.sin(30 * Math.PI / 180),
Math.sin(45 * Math.PI / 180), Math.sin(60 * Math.PI / 180),
Math.round(Math.sin(90 * Math.PI / 180)), Math.round(Math.sin(180 * Math.PI / 180)));
console.log(Math.cos(0), Math.cos(30 * Math.PI / 180),
Math.cos(45 * Math.PI / 180), Math.cos(60 * Math.PI / 180),
Math.round(Math.cos(90 * Math.PI / 180)), Math.cos(180 * Math.PI / 180));

console.log(Math.min(0, 150, 30, 20, -8, -200));  // returns -200)
console.log(Math.max(0, 150, 30, 20, -8, -200));  // returns 150

console.log(Math.random()); 

console.log(Math.E);        // returns Euler's number
console.log(Math.PI);       // returns PI
console.log(Math.SQRT2);    // returns the square root of 2
console.log(Math.SQRT1_2);  // returns the square root of 1/2
console.log(Math.LN2);      // returns the natural logarithm of 2
console.log(Math.LN10);     // returns the natural logarithm of 10
console.log(Math.LOG2E);    // returns base 2 logarithm of E
console.log(Math.LOG10E);   // returns base 10 logarithm of E

console.log(Math.cbrt(8));
console.log(Math.exp(4));

console.log(Math.trunc(9.28));

console.log(Math.floor(Math.random()*10));
console.log(Math.random() * 100);

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

console.log(getRndInteger(1, 10));

