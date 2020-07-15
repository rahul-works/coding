let assert = require('assert');
let angleClock = require('./angleClock');
describe('angleClock', function() {
    it('angleClock', function() {
        assert.equal(angleClock(1, 57), 76.5);
        assert.equal(angleClock(12, 30), 165);
        assert.equal(angleClock(3, 30), 75);
        assert.equal(angleClock(4, 50), 155);
        assert.equal(angleClock(3, 15), 7.5);
        assert.equal(angleClock(12, 0), 0);
        assert.equal(angleClock(8, 7), 158.5);
        assert.equal(angleClock(10, 0), 60);
    });
});