let assert = require('assert');
let reverseWords = require('./reverseWords');
describe('reverseWords', function() {
    it('reverseWords', function() {
        assert.equal(reverseWords("the sky is blue"), "blue is sky the");
        assert.equal(reverseWords("  hello world!  "), "world! hello");
        assert.equal(reverseWords("a good   example"), "example good a");
    });
});