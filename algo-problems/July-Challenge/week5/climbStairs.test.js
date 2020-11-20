let assert = require('assert');
let climbStairs = require('./climbStairs');
describe('climbStairs', function() {
    it('climbStairs', function() {
        assert.equal(climbStairs(5), 8);
        assert.equal(climbStairs(6), 13);
        assert.equal(climbStairs(7), 21);
    });
});
