let assert = require('assert');
let allPathsSourceTarget = require('./allPathsSourceTarget');
describe('allPathsSourceTarget', function() {
    it('allPathsSourceTarget', function() {
        assert.deepEqual(allPathsSourceTarget([[1,2],[3],[3],[]]), [ [ 0, 1, 3 ], [ 0, 2, 3 ] ]);
        assert.deepEqual(allPathsSourceTarget([[4,3,1],[3,2,4],[3],[4],[]]), [[0,4],[0,3,4],[0,1,3,4],[0,1,2,3,4],[0,1,4]]);
    });
});
