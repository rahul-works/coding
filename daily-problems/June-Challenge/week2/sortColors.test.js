let assert = require('assert');
let sortColors = require('./sortColors');
describe('sort color', function() {
    it('check sort color', function() {
        assert.deepEqual(sortColors([2,0,2,1,1,0]), [ 0, 0, 1, 1, 2, 2 ]);
    });
});
