/*
Q2. Stairs

Problem Description
You are climbing a stair case and it takes A steps to reach to the top.
Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Problem Constraints
1 <= A <= 36

Input Format
The first and the only argument contains an integer A, the number of steps.

Output Format
Return an integer, representing the number of ways to reach the top.

Example Input
Input 1:
 A = 2
Input 2:
 A = 3

Example Output
Output 1:
 2
Output 2:
 3

Example Explanation
Explanation 1:
 Distinct ways to reach top: [1, 1], [2].
Explanation 2:

 Distinct ways to reach top: [1 1 1], [1 2], [2 1].
*/

// Iteration
/*
function climbStairs(A){
  if (A===1) {
    return 1;
  }
  if (A===2) {
    return 2;
  }
  const dp = [];
  dp[0] = 0;
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 2; i < A; i++ ) {
    dp[i+1] = dp[i]+dp[i-1];
  }
  return dp[A];
}*/
 
// Recursion 
const dp = [];
function climbStairs(A){
  if (A<3) return A;
  if (dp[A]) { return dp[A]; }
  let ans = climbStairs(A-1) + climbStairs(A-2);
  dp[A] = ans;
  return ans;
}
console.log(climbStairs(4));
console.log(climbStairs(5));