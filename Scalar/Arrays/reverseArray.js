/*Reverse the Array
Problem Description

You are given a constant array A.

You are required to return another array which is the reversed form of input array.



Problem Constraints
1 <= A.size() <= 10000

1 <= A[i] <= 10000



Input Format
First argument is a constant array A.



Output Format
You have to return an integer array.



Example Input
Input 1:

A = [1,2,3,2,1]
Input 2:

A = [1,1,10]


Example Output
Output 1:

 [1,2,3,2,1] 
Output 2:

 [10,1,1] 


Example Explanation
Explanation 1:

Reversed form of input array is same as original array
Explanation 2:

Clearly, Reverse of [1,1,10] is [10,1,1]*/
module.exports = { 
  //param A : array of integers
  //return a array of integers
   solve : function(A){
       const N= A.length;
         for (let i = 0; i < Math.floor(N/2); i++) {
             A[i] = A[i]^A[N-i-1];
             A[N-i-1] = A[i]^A[N-i-1];
             A[i] = A[i]^A[N-i-1];
         }
         return A;
   }
 };
 