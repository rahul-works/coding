
/*
Q4. Maximum array sum after B negations
Solved
character backgroundcharacter
Stuck somewhere?
Ask for help from a TA & get it resolved
Get help from TA
Problem Description
Given an array of integers A and an integer B. You must modify the array exactly B number of times. In a single modification, we can replace any one array element A[i] by -A[i].

You need to perform these modifications in such a way that after exactly B modifications, sum of the array must be maximum.



Problem Constraints
1 <= length of the array <= 5*105
1 <= B <= 5 * 106
-100 <= A[i] <= 100



Input Format
The first argument given is an integer array A.
The second argument given is an integer B.



Output Format
Return an integer denoting the maximum array sum after B modifications.



Example Input
Input 1:

 A = [24, -68, -29, -9, 84]
 B = 4
Input 2:

 A = [57, 3, -14, -87, 42, 38, 31, -7, -28, -61]
 B = 10


Example Output
Output 1:

 196
Output 2:

 362


Example Explanation
Explanation 1:

 Final array after B modifications = [24, 68, 29, -9, 84]
Explanation 2:

 Final array after B modifications = [57, -3, 14, 87, 42, 38, 31, 7, 28, 61]

*/module.exports = { 
  //param A : array of integers
  //param B : integer
  //return an integer
   solve : function(A, B){
         const h = [-1];
         function insertMinHeap(val) {
       h.push(val);
       let i = h.length-1;
       while (Math.floor(i/2) > 0 && h[Math.floor(i/2)] > h[i]) {
         let p = Math.floor(i/2);
         let t = h[p];
         h[p] = h[i];
         h[i] = t;
         i =  Math.floor(i/2);
       }
     }
         for (let i = 0; i < A.length; i++) { 
             insertMinHeap(A[i]);
         }
         function deleteMin() {
       let l = h.length-1;
       let t = h[1];
       h[1] = h[l];
       h[l] = t;
       
       let ret = h.pop();
       let N = h.length;
       if (h.length>1) {
         let i = 1;
         while (((i*2)< N || (i*2+1)<N) && (h[i*2] <= h[i] || h[i*2+1] <= h[i])) {
           let minIndex = -1;
           if (i*2 + 1 < N) {
             if (h[2*i] < h[2*i+1]) {
               minIndex = 2*i;
             } else {
               minIndex = 2*i + 1;
             }
           } else {
             minIndex = 2*i;
             
           }
           let t = h[minIndex];
           h[minIndex] = h[i];
           h[i] = t;
           i = minIndex;
         }
       }
       return ret;
     }
         // console.log(h.length);
         // for (let i = 0; i < 10; i++) {
         //     console.log(deleteMin());
         // }
         for (let i = 0; i < B; i++) {
             // console.log(h); 
             let val = deleteMin();
             // console.log(val, h); 
             insertMinHeap(val*-1);
 
         }
         // console.log(h);
         let sum = 0;
         for (let i = 1; i < h.length; i++) {
             sum += h[i];
         }
         return sum;
   }
 };
 