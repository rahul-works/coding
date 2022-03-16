function maxProdArray(A) {
  const N = A.length;
  let min = A[0];
  let max = A[0];
  let ans = A[0];
  for (let i = 1; i < N; i++) {
    if (min > A[i]*min) {
      min = A[i]*min;
    } else if (min > A[i]) {
      min = A[i];
    }
    if (max < A[i]*max) {
      max = A[i]*max;
    } else if (max < A[i]) {
      max = A[i];
    }
    ans = Math.max(ans, min, max);
  }
  return ans;
}

const A = [1, 2, 6, 3]
console.log(maxProdArray(A));