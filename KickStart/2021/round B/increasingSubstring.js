function increasingSubstring(str)  {
  if (str.length === 0)
    return '';
  let curr = 1;
  let stack = [1];
  for (let i = 1; i < str.length; i++) {
    if (str.charCodeAt(i-1) < str.charCodeAt(i)) {
      stack.push(++curr);
    } else {
      curr = 1;
      stack.push(curr);
    }
  }
  let ans = '1';
  for (let i = 1; i < stack.length; i++)
    ans += ' ' +stack[i];
  return ans;
}

// console.log(increasingSubstring('ABBC'));
// console.log(increasingSubstring('ABACDA'));

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
   } else if (expect === 'start' || expect === 'line2') {
       N = parseInt(line);
       expect = 'line1';
   } else if (expect === 'line1') {
      expect = 'line2';
      if (num_test_case > 0){
        console.log("Case #"+testCase+": "+increasingSubstring(line));
        testCase++;
        num_test_case--;
      } 
      if (num_test_case<1) {
        rl.close();
      }
   }
});