let assert = require('assert');
let reverseBits = require('./reverseBits');
describe('reverseBits', function() {
    it('reverseBits', function() {
        assert.equal(reverseBits(43261596), 964176192);
    });
});