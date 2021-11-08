function check(K, n) {
  let sum = n;
  // console.log('n:'+n);
  for (let i = n+1; i+sum <= K; i++ ) {
    sum += i;
    // console.log(i, sum);
  }
  if (sum === K) {
    return true;
  } else {
    return false;
  }
}

function alienGenerator(K) {
  let count = 0;
  for (let i = 1; i+i < K ; i++) {

    if (check(K, i)) {
      // console.log(i);
      ++count; 
    } 
  }
  return count+1;
}

// console.log(alienGenerator(125));


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
        console.log("Case #"+testCase+": "+alienGenerator(N));
        testCase++;
        num_test_case--;
      } 
      if (num_test_case<1) {
        rl.close();
      }
   }
});