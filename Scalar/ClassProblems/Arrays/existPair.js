function existPair(A, k) {
  const N = A.length;
  for (let i = 0; i < N; i++) {
    for (let j = i+1; j < N; j++) {
      if (A[i]+A[j] === k) {
        return true;
      }
    }
  }
  return false;
}

let A = [1, 3,4 , 5, 7, 2, 25 ,6];
console.log(existPair(A, 7));//true
console.log(existPair(A, 14));//false