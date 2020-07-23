let assert = require('assert');
let threeSumClosest = require('./threeSumClosest');
describe('threeSumClosest', function() {
    it('threeSumClosest', function() {
        assert.deepEqual(threeSumClosest([-1,2,1,-4], 1), 2);
        assert.deepEqual(threeSumClosest([1,1,-1,-1,3], 3), 3);
        assert.deepEqual(threeSumClosest([0,0,0], 1), 0);
        assert.deepEqual(threeSumClosest([1,2,4,8,16,32,64,128], 82), 82);
    });
});