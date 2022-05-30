/*
CHOCOLATY GIFT BOX

Problem Statement

Amy has three kinds of chocolates:
·       There are C1 chocolates of 1st kind and each weight 2 gram.
·       There are C2 chocolates of 2nd kind and each weight 3 gram.
·       There are C3 chocolates of 3rd kind and each weight 4 gram.

 

She wants to pack gift boxes such that each gift box contains chocolates of either of three kinds and weight of each box must be exactly 10 grams. Consider the weight of an empty box as negligeable. (Weight of each box is the sum of weight of chocolates in that box).

 

Help Amy to minimise the sum of weights of chocolates that are left behind after packing of gift boxes is over.

 

NOTE: You cannot break a chocolate into multiple pieces. Each chocolate can go to at most one gift box.

 

You are given T independent test cases.

 

 

 

Constraints
1 <= T <= 10^5
1 <= C1, C2, C3 <= 10^14
All input values are integers.

 

Input Format
First-line contains T.
Next T lines each contains three space separated integers C1, C2 and C3.

 

 

Output Format

Print in a newline for each test case a single integer denoting the minimum possible sum of weights of chocolates that are left behind after packing of gift boxes is over.

 

 

Sample Input 1

2
1 2 1
0 1 2

 

Sample Output 1

2
11

 

 

Explanation of Sample 1
 
In the 1st test case, we can pack one gift box containing 2 chocolates of 2nd kind and one chocolate of 3rd kind. So, we are left with one chocolate of 1st kind and weight 2 grams.

 

In 2nd test case, we all chocolates are left as it is not possible to pack any gift box.


 

Things to Note for the Candidate

You can use your own IDE like Visual Studio Code, Eclipse, or any other IDE that you are comfortable with to build your solution code.
The IDE provided on the platform is purely for submission. Avoid using the IDE for coding out the solution.
Test against any custom input in your own IDE. In the IDE provided on the platform, you cannot pass custom test cases and see the output. 
Use standard input and standard output in your program for the IDE to run the test cases smoothly against your code. We are giving a sample problem statement along with a solution that will pass the test cases in the IDE. - Sample Problem Statement  (Right Click and Open in New Tab to view.)
*/
