const dp = [];
function solve(i) {
  if (i < 0) return 0;
  if (dp[i]) {
    return dp[i];
  }
  ans = Math.max(solve(i-1), A[i]+solve(i-2));
  dp[i] = ans;
  return ans;
}

// const A = [10, 50, 20, 60];
// const A = [10, 10, 20, 20];
const A = [10, 100, 50, 20, 100];
console.log(solve(A.length-1));