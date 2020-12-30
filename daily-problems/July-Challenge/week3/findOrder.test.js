let assert = require('assert');
let findOrder = require('./findOrder');
describe('findOrder', function() {
    it('findOrder', function() {
        assert.deepEqual(findOrder(2, [[1,0]]), [0, 1]);
        assert.deepEqual(findOrder(4, [[1,0],[2,0],[3,1],[3,2]]), [0, 1, 2, 3]);
        assert.deepEqual(findOrder(1, []), [0]);
        assert.deepEqual(findOrder(2, [[0, 1], [1, 0]]), []);
        assert.deepEqual(findOrder(3, [[0,1],[0,2],[1,2]]), [2, 1, 0]);
        assert.deepEqual(findOrder(3, [[1,0],[2,1]]), [0, 1, 2]);
        assert.deepEqual(findOrder(3, [[1,0],[1,2],[0,1]]), []);
    });
});