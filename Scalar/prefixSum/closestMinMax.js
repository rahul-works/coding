function closestMinMaxSum(A) {
    const N = A.length;
    let ans = N;
    let min = Math.min(...A);
    let max = Math.max(...A);
    let maxi = 2*N;
    let mini = 2*N;
    console.log(min, max);
    if (min === max) return 1;
    for (let i = 0; i < N; i++) {
      if (A[i] === max) {
        ans = Math.min(ans, mini-i+1);
        maxi = i;
      } else if (A[i] === min) {
        ans = Math.min(ans, maxi-i+1);
        mini = i;
      }
    }
    return ans;
}

console.log(closestMinMaxSum([1, 2,-1,4, 5]));