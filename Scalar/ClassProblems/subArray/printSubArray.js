function printSubArray(A){
  const N = A.length;
  for (let i = 0; i < N; i++) {
    for (let j = i; j < N; j++) {
      sa = '[';
      for (let k = i; k < j; k++) {
        sa += A[k]+',';
      }
      sa += A[j] + ']';
      console.log(sa);
    }
  }
}

let A = [1, 2, 3, 4, 5, 6, 7, 8];
printSubArray(A);
