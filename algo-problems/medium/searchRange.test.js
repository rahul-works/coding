let assert = require('assert');
let searchRange = require('./searchRange');
describe('searchRange', function() {
    it('searchRange', function() {
        assert.deepEqual(searchRange([5,7,7,8,8,10], 8), [3, 4]);
        assert.deepEqual(searchRange([5,7,7,8,8,10], 6), [-1, -1]);
    });
});
