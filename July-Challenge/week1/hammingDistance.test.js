let assert = require('assert');
let hammingDistance = require('./hammingDistance');
describe('hammingDistance', function() {
    it('hammingDistance', function() {
        assert.equal(hammingDistance(1, 4), 2);
        assert.equal(hammingDistance(4, 2), 2);
    });
});