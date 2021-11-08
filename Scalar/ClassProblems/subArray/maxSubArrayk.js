function maxSubArrayk(A, k) {
  let s = 0;
  let N = A.length;
  for (let i = 0; i < k; i++) {
    s += A[i];
  }
  let max = s;
  console.log(max);
  for (let i = 1; i <= N-k; i++) {
    j = i + k - 1;
    s -= A[i-1];
    s += A[j];
    if (max < s) {
      max = s;
    }
  }
  return max;
}

let A = [1, 2,3, 4, 5, 6, 7, 8, 9];// 30
console.log(maxSubArrayk(A, 4));