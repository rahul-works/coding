let assert = require('assert');
let lengthOfLongestSubstring = require('./lengthOfLongestSubstring');
describe('lengthOfLongestSubstring', function() {
    it('lengthOfLongestSubstring', function() {
        assert.equal(lengthOfLongestSubstring("abcabcbb"), 3);
        assert.equal(lengthOfLongestSubstring("bbbbb"), 1);
        assert.equal(lengthOfLongestSubstring("pwwkew"), 3);
        assert.equal(lengthOfLongestSubstring("aab"), 2);
        assert.equal(lengthOfLongestSubstring("dvdf"), 3);
        assert.equal(lengthOfLongestSubstring("ohvhjdml"), 6);
    });
});