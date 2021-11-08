function KGoodness(N, K, Str) {
  let goodNess = 0;
  let operation = 0;
  
  for (let i = 0; i < Math.floor(N/2); i++) {
    if (Str[i] === Str[N-i-1]) {
      operation += 1;
    }
    goodNess +=1;
  }
  while (K < goodNess) {
    operation--;
    goodNess--;
  }
  return operation;
}

// console.log(KGoodness(5, 1, "ABCAA"));
// console.log(KGoodness(4, 2, "ABAA"));
console.log(KGoodness(6, 4, "ABCCBA"));
/*
var readline = require('readline');
var rl = readline.createInterface(
     process.stdin, process.stdout);
let expect = 'begin';
var N, K, Str;
var num_test_case;
let testCase = 1;
rl.on('line', function(line){
   if (expect === 'begin') {
       num_test_case = parseInt(line);
       expect = 'start';
   } else if (expect === 'start') {
       var N_K = line.split(' ');
       N = parseInt(N_K[0]);
       K = parseInt(N_K[1]);
       expect = 'string';
   } else if (expect === 'string') {
       
       expect = 'start';
       
      if (num_test_case > 0){
        console.log("Case #"+testCase+": "+KGoodness(N, K, line));
        testCase++;
        num_test_case--;
      } 
      if (num_test_case<1) {
        rl.close();
      }
   }
});
*/