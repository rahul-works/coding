/**
 * Q3. Regular Expression Match
Attempted
character backgroundcharacter
Stuck somewhere?
Ask for help from a TA & get it resolved
Get help from TA
Problem Description

Implement wildcard pattern matching with support for ' ? ' and ' * ' for strings A and B.

' ? ' : Matches any single character.
' * ' : Matches any sequence of characters (including the empty sequence).
The matching should cover the entire input string (not partial).



Problem Constraints

1 <= length(A), length(B) <= 104



Input Format

The first argument of input contains a string A.
The second argument of input contains a string B.



Output Format

Return 1 if the patterns match else return 0.



Example Input

Input 1:

 A = "aaa"
 B = "a*"
Input 2:

 A = "acz"
 B = "a?a"


Example Output

Output 1:

 1
Output 2:

 0


Example Explanation

Explanation 1:

 Since '*' matches any sequence of characters. Last two 'a' in string A will be match by '*'.
 So, the pattern matches we return 1.
Explanation 2:

 '?' matches any single character. First two character in string A will be match. 
 But the last character i.e 'z' != 'a'. Return 0.
 */

function isMatch (A, B){
  const N = A.length;
  const M = B.length;
  const dp = [];
  function check ( i, j) {   
    if (i < 0 && j < 0) {
        return 1;
    } else if (i < 0) {
      for (let k = j; k >= 0; k--) {
        if (B[k] !== '*') {
          return 0;
        }
      }
      return 1;
    } else if (j < 0) {
      return 0;
    }
    if (dp[i] === undefined) {
      dp[i] = [];
    } else if (dp[i][j] !== undefined) {
      return dp[i][j];
    }

    // case 1 : [a-z]
    if (B[j] >= 'a' && B[j] <= 'z'){
      if (A[i] === B[j]) {
        dp[i][j] = check ( i-1, j-1);
        return dp[i][j];
      } else {
        return 0;
      }
    }
    // case 2: ?
    else if (B[j] === '?') {
      dp[i][j] = check (i-1, j-1);
      return dp[i][j];
    } 
    // case 3: *
    else if (B[j] === '*') {
      dp[i][j] = check (i-1, j)
      // do not match 
      || check (i, j-1);
      // match 
      return dp[i][j];
    }
    // console.log(i, j);
  }
  return check (N-1, M-1);
}
 