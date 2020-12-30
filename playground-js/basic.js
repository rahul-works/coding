let person = "Hedge";
console.log("John" + " " + "Doe");

// variable naming 
// hypens 
// Underscore 
// Upper camel case 
// Lower camel case

console.log("5" + 5 + 6);
console.log(5 + 6 + "5");

var $$$ = "Hello World";
var $ = 2;
var $myMoney = 5;

console.log($$$, $, $myMoney);

var _lastName = "Johnson";
var _x = 2;
var _100 = 5;

console.log(_lastName, _x, _100);

console.log(5 ** 2);

var x = 10;
x += 5;

console.log(x);

var txt1 = "What a very ";
txt1 += "nice day";

console.log(txt1);

console.log(5 & 1);
console.log(5 | 1);
console.log(~5);
console.log(5 ^ 1);
console.log(5 << 1);
console.log(5 >> 1);
console.log(5 >>> 1);
console.log(5 % 2);
var x = 5;
x++;
var z = x;
console.log(z);
var x = 16 + "Volvo";
console.log(x);
var x = "16" + "Volvo";
console.log(x);
var x = "Volvo" + 16;
console.log(x);
var x = 16 + 4 + "Volvo";
console.log(x);
var x = "Volvo" + 16 + 4;
console.log(x);
var carName1 = "Volvo XC60"; // Using double quotes
var carName2 = 'Volvo XC60'; // Using single quotes
console.log(carName1);
console.log(carName2);
var x1 = 34.00; // Written with decimals
var x2 = 34; // Written without decimals
console.log(x1);
console.log(x2);
var y = 123e5; // 12300000
var z = 123e-5; // 0.00123
console.log(y);
console.log(z);

console.log(typeof "");
console.log(typeof 0);
console.log(typeof undefined);
console.log(typeof null);
console.log(null === undefined);
console.log(null == undefined);
console.log(typeof true);
console.log(typeof [1, 2, 3, 4]);
console.log(typeof
    function myFunc() {});
console.log(typeof { name: 'John', age: 4 });

var x = myFunction(4, 3); // Function is called, return value will end up in x

function myFunction(a, b) {
    return a * b; // Function returns the product of a and b
}

console.log(x);

function toCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
}

console.log(toCelsius(92));
console.log(toCelsius);
var car = { type: "Fiat", model: "500", color: "white" };
console.log(car);
console.log(car.type);
console.log(car["model"]);
var c = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

console.log(c.firstName);
console.log(c['firstName']);
console.log(c.fullName);
console.log(c.fullName());

var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sln = txt.length;

console.log(sln);

var x = "We are the so-called \"Vikings\" from the north.";

console.log(x);

var x = 'It\'s alright.';
console.log(x);

var x = "The character \\ is called backslash.";
console.log(x);

var x = "Hello \
Dolly!";
console.log(x);

var x = "John";
var y = new String("John");
var z = new String("John");

console.log(typeof x);
console.log(typeof y);
console.log(x == y);
console.log(x === y);
console.log(y === y);
console.log(y === z);

var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate");

console.log(pos);

var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("locate");

console.log(pos);

var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("John");

console.log(pos);

var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate", 15);

console.log(pos);
var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("locate", 15);
console.log(pos);

var str = "Please locate where 'locate' occurs!";
var pos = str.search("locate");

console.log(pos);

var str = "Apple, Banana, Kiwi";
var res = str.slice(7, 13);

console.log(res); // banana

var str = "Apple, Banana, Kiwi";
var res = str.slice(-12, -6);

console.log(res); // Banana
var res = str.slice(7);
console.log(res); // Banana

var res = str.slice(-12);
console.log(res);

var str = "Apple, Banana, Kiwi";
var res = str.substring(7, 13);

console.log(res);

var str = "Apple, Banana, Kiwi";
var res = str.substr(7, 6);

console.log(res);

var str = "Apple, Banana, Kiwi";
var res = str.substr(7);

console.log(res);

var str = "Apple, Banana, Kiwi";
var res = str.substr(-4);

console.log(res);

str = "Please visit Microsoft!";
var n = str.replace("Microsoft", "W3Schools");

console.log(n);

str = "Please visit Microsoft and Microsoft!";
var n = str.replace("Microsoft", "W3Schools");

console.log(n);

str = "Please visit Microsoft!";
var n = str.replace("MICROSOFT", "W3Schools");

console.log(n);

str = "Please visit Microsoft!";
var n = str.replace(/MICROSOFT/i, "W3Schools");

console.log(n);

str = "Please visit Microsoft and Microsoft!";
var n = str.replace(/Microsoft/g, "W3Schools");

console.log(n);

var text1 = "Hello World!"; // String
var text2 = text1.toUpperCase(); // text2 is text1 converted to upper

console.log(text2);

var text1 = "Hello World!"; // String
var text2 = text1.toLowerCase(); // text2 is text1 converted to lower

console.log(text2);

var text1 = "Hello";
var text2 = "World";
var text3 = text1.concat(" ", text2);

console.log(text3);

var text = "Hello" + " " + "World!";
console.log(text);
var text = "Hello".concat(" ", "World!");

console.log(text);

var str = "       Hello World!        ";
console.log(str.trim());

var str = "       Hello World!        ";
console.log(str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ''));

if (!String.prototype.trim) {
    String.prototype.trim = function() {
        return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
    };
}
var str = "       Hello World!        ";
console.log(str.trim());

var str = "HELLO WORLD";
console.log(str.charAt(0));

var str = "HELLO WORLD";
console.log(str.charCodeAt(0)); // returns 72

var str = "HELLO WORLD";
console.log(str[0]); // returns H

var str = "HELLO WORLD";
str[0] = "A"; // Gives no error, but does not work
console.log(str[0]); // returns H

var txt = "a,b,c,d,e"; // String
console.log(txt.split(",")); // Split on commas
console.log(txt.split(" ")); // Split on spaces
console.log(txt.split("|")); // Split on pipe

var txt = "Hello"; // String
console.log(txt.split("")); // Split in characters

var x = 3.14; // A number with decimals
var y = 3; // A number without decimals

console.log(x, y);

var x = 999999999999999; // x will be 999999999999999
var y = 9999999999999999n; // y will be 10000000000000000

console.log(x, y, typeof y);
var x = 0.2 + 0.1;         // x will be 0.30000000000000004
console.log(x);

var x = 10;
var y = 20;
var z = "The result is: " + x + y;
console.log(z);

var x = "100";
var y = "10";
var z = x / y;       // z will be 10

console.log(z);

var x = "100";
var y = "10";
var z = x * y;       // z will be 1000

console.log(z);

var x = "100";
var y = "10";
var z = x - y;       // z will be 90

console.log(z);

var x = 100 / "Apple";  // x will be NaN (Not a Number)

console.log(x);
var x = 100 / "10";     // x will be 10

console.log(x);
var x = 100 / "Apple";
console.log(isNaN(x));    

var x = NaN;
var y = 5;
var z = x + y;         // z will be NaN

console.log(z);

var x = NaN;
var y = "5";
var z = x + y;         // z will be NaN5

console.log(z);

console.log(typeof NaN);

var myNumber = 2;
while (myNumber != Infinity) {   // Execute until Infinity
  myNumber = myNumber * myNumber;
  console.log(myNumber);
}

var x =  2 / 0;       // x will be Infinity
var y = -2 / 0;       // y will be -Infinity

console.log(x, y);

console.log(typeof Infinity);     // returns "number"
var x = 0xFF;        // x will be 255
console.log(x);

var myNumber = 32;
console.log(myNumber.toString(10));  // returns 32
console.log(myNumber.toString(32));  // returns 10
console.log(myNumber.toString(15));  // returns 20
console.log(myNumber.toString(8));   // returns 40
console.log(myNumber.toString(2));   // returns 100000

var x = 123;
var y = new Number(123);

console.log(typeof x, typeof y);
// typeof x returns number
// typeof y returns object

var x = new Number(500);             
var y = new Number(500);

console.log(x==y, x===y);

var x = 123;
console.log(x.toString());            // returns 123 from variable x
console.log((123).toString());        // returns 123 from literal 123
console.log((100 + 23).toString());   // returns 123 from expression 100 + 23

var x = 9.656;
console.log(x.toExponential(2));     // returns 9.66e+0
console.log(x.toExponential(4));     // returns 9.6560e+0
console.log(x.toExponential(6));     // returns 9.656000e+0

var x = 9.656;
console.log(x.toFixed(0));           // returns 10
console.log(x.toFixed(2));           // returns 9.66
console.log(x.toFixed(4));           // returns 9.6560
console.log(x.toFixed(6));           // returns 9.656000

var x = 9.656;
console.log(x.toPrecision());        // returns 9.656
console.log(x.toPrecision(2));       // returns 9.7
console.log(x.toPrecision(4));       // returns 9.656
console.log(x.toPrecision(6));       // returns 9.65600

console.log(Number(true));          // returns 1
console.log(Number(false));         // returns 0
console.log(Number("10"));          // returns 10
console.log(Number("  10"));        // returns 10
console.log(Number("10  "));        // returns 10
console.log(Number(" 10  "));       // returns 10
console.log(Number("10.33"));       // returns 10.33
console.log(Number("10,33"));       // returns NaN
console.log(Number("10 33"));       // returns NaN
console.log(Number("John"));        // returns NaN

console.log(Number(new Date("2017-09-30"))); 

console.log(parseInt("10"));         // returns 10
console.log(parseInt("10.33"));      // returns 10
console.log(parseInt("10 20 30"));   // returns 10
console.log(parseInt("10 years"));   // returns 10
console.log(parseInt("years 10"));   // returns NaN 

console.log(parseFloat("10"));        // returns 10
console.log(parseFloat("10.33"));     // returns 10.33
console.log(parseFloat("10 20 30"));  // returns 10
console.log(parseFloat("10 years"));  // returns 10
console.log(parseFloat("years 10"));  // returns NaN

var x = Number.MAX_VALUE;
console.log(x);

var x = Number.MIN_VALUE;
console.log(x);

var x = Number.POSITIVE_INFINITY;
console.log(x);

var x = 1 / 0;
console.log(x);

var x = Number.NEGATIVE_INFINITY;
console.log(x);


var x = -1 / 0;
console.log(x);

var x = Number.NaN;
console.log(x);

var x = 100 / "Apple";
console.log(x);

var x = 6;
var y = x.MAX_VALUE;    // y becomes undefined

console.log(x, y);

var cars = ["Saab", "Volvo", "BMW"];
console.log(cars, cars[1], cars[3]);
console.log(typeof cars);
var cars = new Array("Saab", "Volvo", "BMW");
console.log(typeof cars);

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[fruits.length] = "Lemon";    // adds a new element (Lemon) to fruits

console.log(fruits);

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[6] = "Lemon";    // adds a new element (Lemon) to fruits

console.log(fruits);

var points = new Array();     // Bad
console.log(points);
var points = [];              // Good 
console.log(points);

console.log(Array.isArray(fruits)); 
console.log(fruits instanceof Array);   // returns true)