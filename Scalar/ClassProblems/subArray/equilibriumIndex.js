function equilibriumIndex(A) {
  let N = A.length;
  let c = 0; 
  let leftSum = 0;
  let rightSum = 0;
  let totalSum = 0;
  for (let i = 0; i < N; i++) {
    leftSum = leftSum + A[i];
    rightSum = totalSum - leftSum + A[i];
    if (leftSum === rightSum) ++c;
  }
  return c;
}

let A = [-7, 1, 5, 2, -4, 3, 0]; //2 
console.log(equilibriumIndex(A));