/*
Reverse Bits
Problem Description

Reverse the bits of an 32 bit unsigned integer A.



Problem Constraints
0 <= A <= 232



Input Format
First and only argument of input contains an integer A.



Output Format
Return a single unsigned integer denoting the decimal value of reversed bits.



Example Input
Input 1:

 0
Input 2:

 3


Example Output
Output 1:

 0
Output 2:

 3221225472


Example Explanation
Explanation 1:

        00000000000000000000000000000000    
=>      00000000000000000000000000000000
Explanation 2:

        00000000000000000000000000000011    
=>      11000000000000000000000000000000 */
const reverse = function(A){
  let r = 31;
  let ret = 0;
  for (let i = 0; i < 32; i++) {
    if (A>>i & 1) {
      ret = Math.pow(2, r) | ret;
      --r;
    }
  }
  // console.log(A.toString(2));
  console.log(ret.toString(2).length);
  return ret;
}

console.log(reverse(3));
a = 3221225472;
console.log(a.toString(2).length);