let assert = require('assert');
let coinChange = require('./coinChange');
describe('coin change', function() {
    it('check coin change', function() {
        assert.deepEqual(coinChange(5, [1,2,5]), 4);
    });
});
