function equalEvenOdd(A){
  let ans = 0;
  for (let i = 0; i < A.length; i++) {
        let B = [...A];
        B.splice(i, 1);
        console.log(B);
        let evenSum = 0;
        let oddSum = 0;
        for (let j = 0; j < B.length; j++) {
            if (j%2) {
                evenSum += B[j];
            } else {
                oddSum += B[j];
            }
        }
        console.log(B, evenSum , oddSum);
        if (evenSum === oddSum) {
            ++ans;
        }
    }
    return ans;
}

console.log(equalEvenOdd([ 1, 2, 3, 7, 1, 2, 3 ]));