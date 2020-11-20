/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    let lcs = new Array(text1.length);
    for (const i in text1) {
        lcs[i] = new Array(text2.length);
        for (const j in text2) {
            if (text1[i] === text2[j]) {
                let diagonal = 0;
                if (i-1 > -1 && j-1 > -1) {
                    diagonal = lcs[i-1][j-1];
                }
                lcs[i][j] = 1 + diagonal;
            } else {
                let left = 0, up =0;
                if (i-1 > -1) {
                    left = lcs[i-1][j];
                }
                if (j-1 > -1) {
                    up = lcs[i][j-1];
                }
                lcs[i][j] = Math.max( left, up);
            }
        }
    }
    console.log(lcs);
    return lcs[text1.length-1][text2.length-1];
};

// longestCommonSubsequence("abcde", "ace");
// longestCommonSubsequence("abc", "abc");
// longestCommonSubsequence("abc", "def");
// longestCommonSubsequence("ezupkr","ubmrapg");
// longestCommonSubsequence("oxcpqrsvwf", "shmtulqrypy");