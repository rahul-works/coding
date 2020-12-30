let assert = require('assert');
let addDigits = require('./addDigits');
describe('addDigits', function() {
    it('addDigits', function() {
        assert.equal(addDigits(38), 2);
    });
});
