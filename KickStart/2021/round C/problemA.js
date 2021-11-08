function smallerStrings () {

}

console.log(smallerStrings());
 
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