let assert = require('assert');
let nthUglyNumber = require('./nthUglyNumber');
describe('nthUglyNumber', function() {
    it('nthUglyNumber', function() {
        assert.equal(nthUglyNumber(10), 12);
        assert.equal(nthUglyNumber(11), 15);
    });
});