let assert = require('assert');
let numSquares = require('./numSquares');
describe('numSquares', function() {
    it('numSquares', function() {
        assert.equal(numSquares(12), 3);
        assert.equal(numSquares(13), 2);
        assert.equal(numSquares(11), 3);
    });
});