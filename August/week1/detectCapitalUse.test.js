let assert = require('assert');
let detectCapitalUse = require('./detectCapitalUse');
describe('detectCapitalUse', function() {
    it('detectCapitalUse', function() {
        assert.equal(detectCapitalUse("USA"), true);
        assert.equal(detectCapitalUse("FLaG"), false);
        assert.equal(detectCapitalUse("Google"), true);
        assert.equal(detectCapitalUse("google"), true);
    });
});
