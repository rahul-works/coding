var numRollsToTarget = function(d, f, target) {
  const dp = [...Array(target+1)].map(() => Array(d+1).fill(0));
  const dp1 = Array(d+1).fill(0);
  console.log(dp1);
  const mod = 10**9 + 7;
  dp[0][0] = 1;
  console.log(dp);
  for(let i = 1; i <= target; i++) {// 1 to 7 
      for(let j = 1; j <= d; j++) { // 1 to 2
          for(let k = 1; k <= f; k++) { // 1 to 6
              if(k > i) break;
              dp[i][j] += dp[i-k][j-1] % mod;                
          }
      }
  }
  console.log(dp);
  return dp[target][d] % mod;
};

let d = 1, f = 6, target = 3;
d = 2, f = 6, target = 7;
d = 30, f = 30, target = 500;
console.log(numRollsToTarget(d, f, target));