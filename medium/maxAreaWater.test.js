let assert = require('assert');
let maxAreaWater = require('./maxAreaWater');
describe('maxAreaWater', function() {
    it('maxAreaWater', function() {
        assert.equal(maxAreaWater([1,8,6,2,5,4,8,3,7]), 49);
        assert.equal(maxAreaWater([1,4,6,2,5,4,8,3,7]), 36);
        assert.equal(maxAreaWater([1,4,6,2,5,4,8,3,1]), 24);
    });
});