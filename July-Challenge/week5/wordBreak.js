/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */

function wordBreakHelp (s, wordDict) {
    let results = [];
    if (s.length === 0) {
        results.push('');
        return results;
    }
    for (const word of wordDict) {
        if (s.startsWith(word)) {
            console.log(s.startsWith(word), s);
            const subStrs = wordBreakHelp(s.substr(word.length), wordDict);
            // console.log(subStrs);
            for (const subStr of subStrs) {
                const space = subStr.length === 0 ? '': ' '; 
                results.push(word + space + subStr);
            }
        }
    }
    return results;
}

var wordBreak = function(s, wordDict) {    
    return wordBreakHelp(s, wordDict);
};

// console.log(wordBreak("catsanddog", ["cat","cats","and","sand","dog"]));
// console.log(wordBreak("pineapplepenapple", ["apple", "pen", "applepen÷", "pine", "pineapple"]));
console.log(wordBreak("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
, ["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"]));