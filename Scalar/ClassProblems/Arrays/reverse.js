function reverse(A) {
  i = 0; 
  j = A.length-1;
  while (i < j) {
    A[i] = A[i]^A[j];
    A[j] = A[i]^A[j];
    A[i] = A[i]^A[j];
    ++i;
    --j;
  }
  return A;
}

const A = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(reverse(A));