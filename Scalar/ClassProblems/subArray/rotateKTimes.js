function rotateKtimes(A, R) {
  const N = A.length;
  A = reverse(A);
  
  for (let i = 0; i < R/2; i++) {
    A[i] = A[i]^A[R-i-1];
    A[R-i-1] = A[i]^A[R-i-1];
    A[i] = A[i]^A[R-i-1];
  }// rotate 1st k elements 
  
  let C = N-R-1;
  let j = 0;
  for (let i = R; i < R+C/2; i++) {
    A[i] = A[i]^A[N-1-j];
    A[N-1-j] = A[i]^A[N-1-j];
    A[i] = A[i]^A[N-1-j];
    j++;
  }// rotate next elements after k 
  return A;
}

function reverse(A) {
  const N = A.length;
  for (let i = 0; i < N/2; i++) {
    let temp = A[i];
    A[i] = A[N-1-i];
    A[N-1-i] = temp;
  }
  return A;
}
let A = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//rotate 4 times -> right 
// Ans: [6, 7, 8, 9, 1, 2, 3, 4, 5]
console.log(rotateKtimes(A, 4));