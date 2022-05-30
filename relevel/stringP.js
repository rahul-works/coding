/*
String Calculation

Problem Statement

You have been given a string S consisting of digits from 1 to 9. You are allowed to insert * at some of the positions (possibly none) between two digits of string S.

 

After insertion you have to calculate the value of that string mathematically, For example: Let S=121, and we inserted * at 1st and 2nd position then S will become 1*2*1 so the mathematical value of S is 1*2*1=2.

 

Your task is to calculate the sum of all possible strings values after insertion of 0 or more  *. Since the sum can be very large so you have to print sum modulo 1000000007.

 

Note:- 

  You can not insert two  * consecutively, i.e if S=23, it is not allowed to transform S to 2**3. 
 

  You can not insert  * at the beginning or at the end of the string, i.e if S=23, it is not allowed to transform S to *23 or 23*. See the sample input for more clarity. 
 

Constraints

  1 <=  t  <= 10 
 

  1  <= |S| <= 14 (length of string)
 

Input Format

 

  First-line contains a single integer t, the number of test cases.
 

  Each test case contains a string S.
 

Output Format

For each test case, output a single line— the sum of all possible strings values after insertion of 0 or more  * modulo 1000000007.

 

 

Sample Input

2
423
99

 

 

Sample Output

665
180

 

Explanation of Sample

 

Test case 1: We can transform S as following strings
        1.) S=423, Mathematical value of S =423
        2.) S=4*23, Mathematical value of S =4*23=92
        3.) S=42*3, Mathematical value of S =42*3=126
        3.) S=4*2*3, Mathematical value of S =4*2*3=24
        So the total sum is 423+92+126+24=665

 

Test case 2: We can transform S as following strings
        1.) S=99, Mathematical value of S =99
        2.) S=9*9, Mathematical value of S =9*9=81
        So the total sum is 99+81=180

 

Things to Note for the Candidate

You can use your own IDE like Visual Studio Code, Eclipse, or any other IDE that you are comfortable with to build your solution code.
The IDE provided on the platform is purely for submission. Avoid using the IDE for coding out the solution.
Test against any custom input in your own IDE. In the IDE provided on the platform, you cannot pass custom test cases and see the output. 
Use standard input and standard output in your program for the IDE to run the test cases smoothly against your code. We are giving a sample problem statement along with a solution that will pass the test cases in the IDE. - Sample Problem Statement  (Right Click and Open in New Tab to view.)
*/