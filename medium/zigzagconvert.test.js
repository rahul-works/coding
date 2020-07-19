let assert = require('assert');
let convert = require('./zigzagconvert');
describe('convert', function() {
    it('convert', function() {
        assert.equal(convert("PAYPALISHIRING", 3), "PAHNAPLSIIGYIR");
        assert.equal(convert("PAYPALISHIRING", 4), "PINALSIGYAHRPI");
        assert.equal(convert("AB", 1), "AB");
        assert.equal(convert("ABC", 1), "ABC");
    });
});