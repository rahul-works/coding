function repeat2except1 (A) {
  let s = 0; 
  for (let i = 0; i < A.length; i++) {
    s ^= A[i];
  }
  return s;
}

let A = [1,1, 2, 2, 3, 3, 4];
console.log(repeat2except1(A));