/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    if (S === undefined && T === undefined) {
        return true;
    }
    if (S === undefined || S.length < 1 || S.length > 200) {
        return false;
    }
    if (T === undefined || T.length < 1 || T.length > 200) {
        return false;
    }
    let sStack = [];
    for (const char of S) {
        if (char === '#') {
            sStack.pop();
        } else {
            sStack.push(char);
        }
    }
    let tStack = [];
    for (const char of T) {
        if (char === '#') {
            tStack.pop();
        } else {
            tStack.push(char);
        }
    }
    if (sStack.join('') === tStack.join('')) {
        console.log('t');
        return true;
    } else {
        console.log('f');
        return false;
    }
};

// const S = "ab#c", T = "ad#c";
// const S = "ab##", T = "c#d#";
// const S = "a##c", T = "#a#c";
// const S = "a#c", T = "b";
backspaceCompare (S, T);
/*
Backspace String Compare
Solution
Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

Example 1:

Input: S = "ab#c", T = "ad#c"
Output: true
Explanation: Both S and T become "ac".
Example 2:

Input: S = "ab##", T = "c#d#"
Output: true
Explanation: Both S and T become "".
Example 3:

Input: S = "a##c", T = "#a#c"
Output: true
Explanation: Both S and T become "c".
Example 4:

Input: S = "a#c", T = "b"
Output: false
Explanation: S becomes "c" while T becomes "b".
Note:

1 <= S.length <= 200
1 <= T.length <= 200
S and T only contain lowercase letters and '#' characters.
Follow up:

Can you solve it in O(N) time and O(1) space?*/
