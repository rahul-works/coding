function isArray(myArray) {
    return myArray.constructor === Array;
}

function isFunction(myFunction) {
    return myFunction.constructor === Function;
}

function IsDate(myDate) {
    return myDate.constructor === Date;
}

console.log(isArray([1, 2, 3]));
console.log(isFunction(function test(){}));
console.log(IsDate(new Date()));

//Converting Numbers to Strings

console.log(String(123));       // returns a string from a number literal 123
console.log(String(100 + 23));

console.log((123).toExponential());
console.log((123.2).toFixed());
console.log((123.2).toPrecision());
// Converting Booleans to Strings
console.log(String(false));      // returns "false"
console.log(String(true));

// Converting Dates to Strings
console.log(String(Date()));

//Converting Strings to Numbers
console.log(parseFloat("3.14"))    // returns 3.14
console.log(parseInt("3.14"))    // returns 3.14
console.log(Number(" "))       // returns 0
console.log(Number(""))        // returns 0
console.log(Number("99 88"))   // returns NaN

var y = "5";      // y is a string
var x = + y;      // x is a number

console.log(x, y);

// Converting Booleans to Numbers
console.log(Number(false))     // returns 0
console.log(Number(true))      // returns 1

//Converting Dates to Numbers
d = new Date();
console.log(Number(d));

d = new Date();
console.log(d.getTime());