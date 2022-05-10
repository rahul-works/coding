function longestPalindrom(A) {
  function expand(i, j) {
    while (i >= 0 && j < A.length && A[i] === A[j]) {
      i--;
      j++;
    }
    return j-i-1;
  }
  const N = A.length;
  let max = 0;
  
  for (let i = 0; i < N; i++) {
    max = Math.max(max, expand(i, i));
  }

  for (let i = 0; i < N-1; i++) {
    max = Math.max(max, expand(i, i+1));
  }
  
  return max;
}

const A = 'abnklknbaasd';
console.log(longestPalindrom(A));