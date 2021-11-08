function slidingWindow(A, k) {
  let max = 0;
  const N = A.length;
  for (let i = 0; i < k; i++) {
    max += A[i];
  }
  let s = max;
  for (let i = 1; i <= N-k; i++) {
    j = i + k - 1;
    s -= A[i-1];
    s += A[j];
    max = Math.max(max, s);
  }
  return max;
}
let A = [1,2, 3, 4, 5,6, 7, 8, 9];
let k = 4;
// Find the max sum for k elements 
// ans = 30 (6+7+8+9)

console.log(slidingWindow(A, k));