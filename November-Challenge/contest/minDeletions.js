/*
5562. Minimum Deletions to Make Character Frequencies Unique
User Accepted:1200
User Tried:1454
Total Accepted:1210
Total Submissions:2301
Difficulty:Medium
A string s is called good if there are no two different characters in s that have the same frequency.

Given a string s, return the minimum number of characters you need to delete to make s good.

The frequency of a character in a string is the number of times it appears in the string. For example, in the string "aab", the frequency of 'a' is 2, while the frequency of 'b' is 1.

 

Example 1:

Input: s = "aab"
Output: 0
Explanation: s is already good.
Example 2:

Input: s = "aaabbbcc"
Output: 2
Explanation: You can delete two 'b's resulting in the good string "aaabcc".
Another way it to delete one 'b' and one 'c' resulting in the good string "aaabbc".
Example 3:

Input: s = "ceabaacb"
Output: 2
Explanation: You can delete both 'c's resulting in the good string "eabaab".
Note that we only care about characters that are still in the string at the end (i.e. frequency of 0 is ignored).
 

Constraints:

1 <= s.length <= 105
s contains only lowercase English letters.*/

/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function(s) {
    const hashFreq = {};
    
    for (const chr of s) {
        if (hashFreq[chr] === undefined) {
            hashFreq[chr] = 1;
        } else {
            hashFreq[chr] += 1;
        }
    }
    let arr = [];
    let hash = {};
    for (const num in hashFreq) {
        arr.push(hashFreq[num]);
        if (hash [hashFreq[num]] === undefined) {
            hash [hashFreq[num]] = 1;
        } else {
            hash [hashFreq[num]] += 1;
        }
    }
    let minDup = 0;
    for (const key in hash) {
        while (hash[key]>1) {
            let check = parseInt(key)-1;
            hash[key]--;
            minDup++;
            while (hash[check] !== undefined) {
                --check;
                minDup++;
            }
            if (check !== 0){
                if (check !== 0 && hash[check]===undefined) {
                    hash[check] = 1;
                } else {
                    hash[check] += 1;
                }
            }
        }
    }
    return minDup;
};