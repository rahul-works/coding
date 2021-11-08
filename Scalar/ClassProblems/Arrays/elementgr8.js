function elementgr8(A) {
  let max = A[0];
  const N = A.length;
  for (let i = 1; i < N; i++) {
    if (max < A[i]) {
      max = A[i];
    }
  }

  c = 0;
  for (let i = 0; i < N; i++) {
    if (max === A[i]) {
      ++c;
    }
  }
  return N-c;
}

A = [1, 2, 4, 5, 6 ,7, 8, 9];
console.log(elementgr8(A));