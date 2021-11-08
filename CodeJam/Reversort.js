function ReverseSort(N, nums) {
  let operation = 0;
  for (let i = 0; i < N-1; i++) {
    let j = Math.min(...nums.slice(i, N));
    if (j !== nums[i]) {
      operation = operation + (nums.indexOf(j)-i+1);
      reverse (nums, i, nums.indexOf(j));
    } else {
      operation++;
    }
  }
  return operation;
}

function reverse(nums, start, end) {
  let copy = [...nums];
  let j = 0;
  for (let i = start; i <= end; i++) {
    nums[i] = copy[end-j];
    j++;
  }
}


// let N = 4;
// let nums = [4,2,1,3];
// N = 2;
// nums = [1,  2];
// N = 7;
// nums = [7, 6, 5, 4, 3, 2, 1];
// console.log(ReverseSort(N, nums));

var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
let expect = 'begin';
var N;
var nums;
var num_test_case;
let testCase = 1;
rl.on('line', function(line){
  if (expect === 'begin') {
    num_test_case = (line);
    expect = 'start';
  } else if (expect === 'start') {
    N = line;
    expect = 'end';
  } else if (expect === 'end') {
    nums = line.split(' ');
    expect = 'start';
    if (num_test_case > 0){
      for (let i = 0; i < nums.length; i++) {
        nums[i] = parseInt(nums[i]);
      }
      console.log("Case #"+testCase+": "+ReverseSort(N, nums));
      testCase++;
      num_test_case--;
    } 
    if (num_test_case<1) {
      rl.close();
    }
  }
});