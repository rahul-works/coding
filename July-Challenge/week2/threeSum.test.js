let assert = require('assert');
let threeSum = require('./threeSum');
describe('threeSum', function() {
    it('threeSum', function() {
        assert.deepEqual(threeSum([-1,0,1,2,-1,-4]), [[-1,-1,2],[-1,0,1]]);
    });
});