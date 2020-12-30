var fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits.toString());


console.log(fruits.join(" * "));

console.log(fruits.pop() );

var fruits = ["Banana", "Orange", "Apple", "Mango"];
 console.log(fruits.push("Kiwi")); 
 console.log(fruits);

 var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.shift()); 
console.log(fruits); 

var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.unshift("Lemon"));
console.log(fruits);

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[0] = "Kiwi";
console.log(fruits);

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[fruits.length] = "Kiwi";
console.log(fruits);

var fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[0]; 
console.log(fruits);

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");

console.log(fruits);

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 2, "Lemon", "Kiwi");

console.log(fruits);

var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.splice(0, 1));   
console.log(fruits);

var myGirls = ["Cecilie", "Lone"];
var myBoys = ["Emil", "Tobias", "Linus"];
var myChildren = myGirls.concat(myBoys);

console.log(myChildren);

var arr1 = ["Cecilie", "Lone"];
var arr2 = ["Emil", "Tobias", "Linus"];
var arr3 = ["Robin", "Morgan"];
var myChildren = arr1.concat(arr2, arr3);

console.log(myChildren);

var arr1 = ["Emil", "Tobias", "Linus"];
var myChildren = arr1.concat("Peter"); 
console.log(myChildren);

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1);

console.log(citrus);

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(3);
console.log(citrus);

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1, 3);

console.log(citrus);

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(2);

console.log(citrus);

console.log('----- -----');

var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.sort()); 
console.log(fruits.reverse()); 

var points = [40, 100, 1, 5, 25, 10];
console.log(points.sort(function(a, b){return a - b}));
console.log(points.sort(function(a, b){return b - a}));
console.log(points.sort(function(a, b){return 0.5 - Math.random()}));
console.log(Math.max.apply(null, points));
var cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
  ];

console.log(cars.sort(function(a, b){return a.year - b.year}));
console.log(cars.sort(function(a, b){
    var x = a.type.toLowerCase();
    var y = b.type.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
  }));

  var txt = "";
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  txt = txt + value + "<br>";
}

var numbers1 = [45, 4, 9, 16, 25];
var numbers2 = numbers1.map(myFunction);

function myFunction(value, index, array) {
  return value * 2;
}

console.log(numbers2);

var numbers = [45, 4, 9, 16, 25];
var over18 = numbers.filter(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
console.log(over18);

var numbers1 = [45, 4, 9, 16, 25];
var sum = numbers1.reduce(myFunction);

function myFunction(total, value, index, array) {
  return total + value;
}

console.log(sum);

var numbers1 = [45, 4, 9, 16, 25];
var sum = numbers1.reduceRight(myFunction);

function myFunction(total, value, index, array) {
  return total + value;
}

console.log('reduceRight', sum);



var numbers = [45, 4, 9, 16, 25];
var allOver18 = numbers.every(myFunction1);

function myFunction1(value, index, array) {
  return value > 18;
}
console.log(allOver18);

var numbers = [45, 4, 9, 16, 25];
var someOver18 = numbers.some(myFunction2);

function myFunction2(value, index, array) {
  return value > 18;
}

console.log(someOver18);

var fruits = ["Apple", "Orange", "Apple", "Mango"];
var a = fruits.indexOf("Apple");

console.log(a);

var fruits = ["Apple", "Orange", "Apple", "Mango"];
var a = fruits.lastIndexOf("Apple");

console.log(a);

var numbers = [4, 9, 16, 25, 29];
var first = numbers.find(myFunction3);

function myFunction3(value, index, array) {
  return value > 18;
}
console.log(first);