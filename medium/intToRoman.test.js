let assert = require('assert');
let intToRoman = require('./intToRoman');
describe('intToRoman', function() {
    it('intToRoman', function() {
        assert.equal(intToRoman(14), 'XIV');
        assert.equal(intToRoman(40), 'XL');
        assert.equal(intToRoman(80), 'LXXX');
        assert.equal(intToRoman(3), 'III');
        assert.equal(intToRoman(114), 'CXIV');
        assert.equal(intToRoman(20), 'XX');
    });
});