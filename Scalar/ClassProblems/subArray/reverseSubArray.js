function reverseSubArray(A, i, j) {
  while(i < j) {
    A[i] = A[i] ^ A[j];
    A[j] = A[i] ^ A[j];
    A[i] = A[i] ^ A[j];
    i++;
    j--;
  }
  return A;
}

const A = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// [1, 2, 8, 7, 6, 5, 4, 3, 9]
console.log(reverseSubArray(A, 2, 7));