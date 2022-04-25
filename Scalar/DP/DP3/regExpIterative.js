module.exports = { 
  //param A : string
  //param B : string
  //return an integer
   isMatch : function(A, B){
         const N = A.length;
         const M = B.length;
         const dp = [];
         dp[0] = [1];
         for (let i = 1; i <=N; i++) {
             dp[i] = [0];
         }
         for (let j = 1; j <=M; j++) {
             if (B[j-1] === '*') {
                 dp[0].push(1);
             } else {
                 dp[0].push(0);
             }
         }
         for (let i = 1; i <=N; i++) {
             for (let j = 1; j <=M; j++) {
                 if (B[j-1] >= 'a' && B[j-1] <= 'z') {
                     if (dp[i-1][j-1] === 1 && A[i-1] === B[j-1]) {
                         dp[i][j] = 1;
                     } else {
                         dp[i][j] = 0;
                     }
                 } else if (B[j-1] === '?') {
                     dp[i][j] = dp[i-1][j-1];
                 } else if (B[j-1] === '*') {
                     dp[i][j] =(dp[i][j-1] | dp[i-1][j] );
                 }
             }
         }
         // console.log(dp);
         return dp[N][M];
   }
 };
 