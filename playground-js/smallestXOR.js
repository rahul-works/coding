/*

Smallest XOR
Problem Description

Given two integers A and B, find a number X such that A xor X is minimum possible, and the number of set bits in X equals B.



Problem Constraints
0 <= A <= 109
0 <= B <= 30



Input Format
First argument contains a single integer A. Second argument contains a single integer B.



Output Format
Return a single integer X.



Example Input
Input 1:

 A = 3
 B = 3
Input 2:

 A = 15
 B = 2


Example Output
Output 1:

 7
Output 2:

 12


Example Explanation
Explanation 1:

 3 xor 7 = 4 which is minimum
Explanation 2:

 15 xor 12 = 3 which is minimum
  */


  function solve1(A, B){
    let aSetBitCount = setBitCount(A);
    let X = 0;
    if (aSetBitCount>B) {
      let len = A.toString(2).length;
      for (let i = len-1; i>=0; i--) {
        if (A>>i & 1 && B > 0) {
          X |= 1<<i;
          --B;
        } else {
          X |= 0<<i;
        }
        // console.log(i, A>>i, A>>i&1, 1<<i, X);
      }
    } else {
      let i = 0;
      B = B-aSetBitCount;
      while (B > 0) {
        if (A>>i & 1) {
          // do nothing 
        } else {
          A ^= 1<<i;
          --B;
        }
        ++i;
      }
      X=A;
    }
    return X;
  }
  function setBitCount(num) {
    let count = 0;
    while (num) {
       if (num&1 === 1){
         ++count;
       }
        num = num >>1;
    }
    return count;
  }
  // console.log(solve1(9, 3));
  //  console.log(solve1(3, 3));
  // console.log(solve1(11, 1));
  // console.log(solve(9, 3));
  // console.log(solve(4, 6));
  // console.log(solve(0, 26));
  // let a = 67108863;
  // console.log(a.toString(2));

  // console.log(solve1(15, 2));
  console.log(solve1(11, 1));