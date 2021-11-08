function equalEvenOddOptimize(A){
  let ans = 0;
  let evenPFSum = [A[0], A[0]];
  let oddPFSum = [0, A[1]];
  let N = A.length;
  let totalSum = 0;
  totalSum += A[0]+A[1];
  
  for (let i = 2; i < N; i++) {
    evenPFSum[i] = evenPFSum[i-1];
    oddPFSum[i] = oddPFSum[i-1];
    if (i%2===0) {
      console.log('even', evenPFSum[i-2], A[i]);
      evenPFSum[i] = evenPFSum[i-2]+A[i];
    } else {
      oddPFSum[i] = oddPFSum[i-2]+A[i];
    }
    totalSum += A[i];
  //  /    console.log(evenPFSum);
  // console.log(oddPFSum);
  }
  console.log(evenPFSum);
  console.log(oddPFSum);
  console.log(totalSum);
  for (let i = 0; i < N; i++) {
        let evenSum = evenPFSum[i];
        let oddSum = oddPFSum[i];
      if (i%2) {
          evenSum = evenPFSum[i-1]-totalSum-oddSum[i+1];
      } else {
          oddSum = oddPFSum[i-1]-totalSum-evenSum[i+1];
      }
      if (evenSum === oddSum) {
          ++ans;
      }
    }
    return ans;
}

console.log(equalEvenOddOptimize([ 1, 2, 3, 7, 1, 2, 3 ]));