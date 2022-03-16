function countOr(A) {
  let N = A.length;
  let cnt = 0;
  let subArr = 0;
  for (let i = 0; i < N; i++) {
    if (A[i]==='0'){
      cnt++;
    } else {
      subArr += (cnt*(cnt+1)/2);
      cnt = 0;
    }
  }
  if (A[N-1]=== '0') {
    subArr += (cnt*(cnt+1)/2);
  }
  console.log((N*(N+1)/2), subArr);
  return (N*(N+1)/2)-subArr;
}

console.log(countOr('0001001001100'));