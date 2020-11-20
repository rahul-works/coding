let assert = require('assert');
let isSubsequence = require('./isSubsequence');
describe('isSubsequence', function() {
    it('check # 1', function() {
        assert.equal(isSubsequence("abc", "ahbgdc"), true);
        assert.equal(isSubsequence("", "ahbgdc"), true);
    });
});


