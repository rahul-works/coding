let assert = require('assert');
let topKFrequent = require('./topKFrequent');
describe('topKFrequent', function() {
    it('topKFrequent', function() {
        assert.deepEqual(topKFrequent([1,1,1,2,2,3], 2), [ 1, 2 ]);
        assert.deepEqual(topKFrequent([1], 1), [ 1 ]);
        assert.deepEqual(topKFrequent([1, 2], 2), [ 1, 2 ]);
        assert.deepEqual(topKFrequent([4,1,-1,2,-1,2,3], 2), [2, -1]);
    });
});