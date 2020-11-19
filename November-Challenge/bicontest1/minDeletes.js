/*5551. Minimum Deletions to Make String Balanced
User Accepted:311
User Tried:470
Total Accepted:312
Total Submissions:650
Difficulty:Medium
You are given a string s consisting only of characters 'a' and 'b'​​​​.

You can delete any number of characters in s to make s balanced. s is balanced if there is no pair of indices (i,j) such that i < j and s[i] = 'b' and s[j]= 'a'.

Return the minimum number of deletions needed to make s balanced.

 

Example 1:

Input: s = "aababbab"
Output: 2
Explanation: You can either:
Delete the characters at 0-indexed positions 2 and 6 ("aababbab" -> "aaabbb"), or
Delete the characters at 0-indexed positions 3 and 6 ("aababbab" -> "aabbbb").
Example 2:

Input: s = "bbaaaaabb"
Output: 2
Explanation: The only solution is to delete the first two characters.
 

Constraints:

1 <= s.length <= 105
s[i] is 'a' or 'b'​​.*/

/**
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function(s) {
    let returnString = '';
    let foundA = false;
    let foundB = false;
    let i = 0;
    let count = 0;
    if (s.length < 2) {
        return 0;
    }
    while (i < s.length) {
        if (!foundA) {
            if (s[i] === 'a') {
                while (s[i] === 'a') {
                    foundA = true;
                    returnString += s[i];
                    i++;
                }
            } else {
                count++;
            }
        }else if (foundA && !foundB) {
            if (s[i] === 'b') {
                returnString += s[i];
            } else {
                count++;
            }
        }
        ++i;
    }
    let countR = 0;
    i = s.length-1;
    foundA = false;
    foundB = false;
    let returnString1 = '' 
    while (i > -1) {
        if (!foundA) {
            if (s[i] === 'b') {
                
                while (s[i] === 'b') {
                    foundA = true;
                    returnString1 += s[i];
                    i--;
                }
            } else {
                countR++;
            }
        }else if (foundA && !foundB) {
            if (s[i] === 'a') {
                returnString1 += s[i];
            } else {
                countR++;
            }
        }
        --i;
    }
    console.log(returnString, count, countR, returnString1, s.length-returnString.length, s.length-returnString1.length);
    if (count === s.length)
        return 0;
    else {
        if (count < countR)
            return count;
        else {
            return countR;
        }
    }
};

/* fails input 
Submission Result: Wrong Answer 
Input:
"ababaaaabbbbbaaababbbbbbaaabbaababbabbbbaabbbbaabbabbabaabbbababaa"
Output:
28
Expected:
25

*/