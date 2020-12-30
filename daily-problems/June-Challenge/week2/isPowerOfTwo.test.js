let assert = require('assert');
let isPowerOfTwo = require('./isPowerOfTwo');
describe('isPowerOfTwo', function() {
    it('check # 1', function() {
        assert.equal(isPowerOfTwo(1), true);
        assert.equal(isPowerOfTwo(4), true);
        assert.equal(isPowerOfTwo(218), false);
    });
});


