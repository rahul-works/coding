let assert = require('assert');
let arrangeCoins = require('./arrangeCoins');
describe('arrangeCoins', function() {
    it('arrangeCoins', function() {
        assert.equal(arrangeCoins(5), 2);
        assert.equal(arrangeCoins(8), 3);
        assert.equal(arrangeCoins(1350490027), 51970);
    });
});