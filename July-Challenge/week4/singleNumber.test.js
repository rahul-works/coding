let assert = require('assert');
let singleNumber = require('./singleNumber');
describe('singleNumber', function() {
    it('singleNumber', function() {
        assert.deepEqual(singleNumber([1,2,1,,3,2,5]), [3, 5]);
        assert.deepEqual(singleNumber([0,0,1,2]), [1,2]);
    });
});