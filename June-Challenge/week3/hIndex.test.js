let assert = require('assert');
let hIndex = require('./hIndex');
describe('hIndex', function() {
    it('check hIndex', function() {
        assert.equal(hIndex([0,1,3,5,6]), 3);
    });
});
