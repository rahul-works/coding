/*
Source to Destination

Problem Statement

Amy has two binary string S (source) and D (destination). String D is initially empty. In one operation she

• Chose a substring of S which is either “10” or “00”.
• Concatenate this substring with D.
• Remove the selected substring from S and the remaining parts of the string get concatenated.
She can do multiple (possibly 0) operations. Find the longest length of string D that she can obtain?

You are given T independent test cases.


Constraints

 

• 1 <= T <= 100
• 1 <= |S| <= 2*10^5
• All input values are integers.
 

Input Format

 

• First-line contains T.
• Next T lines each contain a binary string S.
 

Output Format

Print in a newline for each test case a single integer denoting the longest length of string D that she can obtain.

 

Sample Input

2
00
0110

 

Sample Output

2
2

 

Explanation of Sample 

 

For Test case 1, S = “00”, D =” ”, -> S =” ”, D = “00”

For Test case 2, S = “0110”, D =” ” -> S = “01” and D = “10” (she can’t perform more operations)

 

Things to Note for the Candidate

You can use your own IDE like Visual Studio Code, Eclipse, or any other IDE that you are comfortable with to build your solution code.
The IDE provided on the platform is purely for submission. Avoid using the IDE for coding out the solution.
Test against any custom input in your own IDE. In the IDE provided on the platform, you cannot pass custom test cases and see the output. 
Use standard input and standard output in your program for the IDE to run the test cases smoothly against your code. We are giving a sample problem statement along with a solution that will pass the test cases in the IDE. - Sample Problem Statement  (Right Click and Open in New Tab to view.)

Code in your favorite IDE and paste in the above widget
Previous
*/