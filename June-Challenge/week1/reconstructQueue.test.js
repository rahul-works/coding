let assert = require('assert');
let reconstructQueue = require('./reconstructQueue');
describe('reconstructQueue', function() {
    it('check # 1', function() {
        assert.deepEqual(reconstructQueue([[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]), [[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]]);
    });
});


