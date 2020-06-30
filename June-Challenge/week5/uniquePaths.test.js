let assert = require('assert');
let uniquePaths = require('./uniquePaths');
describe('uniquePaths', function() {
    it('uniquePaths', function() {
        assert.equal(uniquePaths(3, 2), 3);
        assert.equal(uniquePaths(7, 3), 28);
    });
});