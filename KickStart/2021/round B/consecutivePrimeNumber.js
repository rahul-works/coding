function consecutivePrimeNumber(num)  {
  let first = -1;
  let second = -1;
  let prev = -1;
  for (let i = 2; i < num; i++) {
    let isPrime = true;
    for (let j = 2, s = Math.sqrt(i); j <=  s; j++) {
      if (i % j == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime && first === -1){
      first = i;
    }
    else if (isPrime && second === -1) {
      second = i;
      
    }
    
    if (first !== -1 && second !== -1) {
      // console.log(first, second , num, first*second, first*second === num);
      if (first*second >= num) {
        break;
      } else {
        
        prev = first;
        first = second;
        second = -1;
      }
    }
  }
  // console.log(first, second, first*second);
  if (first*second === num) {
    return num;
  } else {
    return prev*first;
  }

}

console.log(consecutivePrimeNumber(2021));
console.log(consecutivePrimeNumber(2020));

var readline = require('readline');
var rl = readline.createInterface(
     process.stdin, process.stdout);
let expect = 'begin';
var N;
var num_test_case;
let testCase = 1;
rl.on('line', function(line){
   if (expect === 'begin') {
       num_test_case = parseInt(line);
       expect = 'start';
   } else if (expect === 'start') {
       N = parseInt(line);
      if (num_test_case > 0){
        console.log("Case #"+testCase+": "+consecutivePrimeNumber(N));
        testCase++;
        num_test_case--;
      } 
      if (num_test_case<1) {
        rl.close();
      }
   }
});