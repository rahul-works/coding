function KS(N, K, P, stack) {
  let dp = [];
  for (let i = 1; i <= N; i++){
    dp[i] = [];
    for (let j = 0; j < K; j++){
      dp[i][j] = 0;
      for (let x = 0; x < Math.min(j, K); x++) {
        console.log(i, x, j);
        dp[i][j] = Math.max(dp[i][j], stack[i][x]+dp[i-1][j-x]);
      }
    }
  }
  console.log(dp);
//  for j [0, P]:
//   dp[i][j] := 0
//    for x [0, min(j, K)]:
//     dp[i][j] = max(dp[i][j], sum[i][x]+dp[i-1][j-x])
}

// T test 
// N # of stack of plates 
// K each stack contains K plates 
// P cap for plates to be used 

const N = 2, K = 4, P = 5;
const stack = [[10, 10, 100, 30],
[80, 50, 10, 50]];

KS(N, K, P, stack);