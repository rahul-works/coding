// Recursive Memoization time O(2^N) | space O(N)
function fibonacciR(n) {
  if (n === 1) {
    return 0;
  }
  else if (n === 0) {
    return 1;
  }
  else {
    return fibonacciR(n-1)+fibonacciR(n-2);
  }
}
console.log(fibonacciR(9));

// Recursive Memoization time O(N) | space O(N)
function fibonacciRM(n) {
  let hash = [];
  if (hash[n]) {
    return hash[n];
  }
  if (n === 1) {
    return 0;
  }
  else if (n === 0) {
    return 1;
  }
  else {
    hash[n] = fibonacciRM(n-1)+fibonacciRM(n-2);
  }
  return hash[n];
}
console.log(fibonacciRM(9));

// time O(N) | space O(1)
function twoArrFibonacci(n) {
  let arr = [0, 1];
  for (let i = 0; i<n-1; i++) {
    let temp = arr[0];
    arr[0] = arr[1];
    arr[1] += temp;
  }
  return arr[0];
}
console.log(twoArrFibonacci(9));