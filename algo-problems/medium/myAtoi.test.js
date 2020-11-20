let assert = require('assert');
let myAtoi = require('./myAtoi');
describe('myAtoi', function() {
    it('myAtoi', function() {
        assert.equal(myAtoi("42"), 42);
        assert.equal(myAtoi("   -42"), -42);
        assert.equal(myAtoi("4193 with words"), 4193);
        assert.equal(myAtoi("words and 987"), 0);
        assert.equal(myAtoi("-91283472332"), -2147483648);
        assert.equal(myAtoi("+"), 0);
        assert.equal(myAtoi("+-2"), 0);
        assert.equal(myAtoi("   +0 123"), 0);
        assert.equal(myAtoi("2147483648"), 2147483647);
        assert.equal(myAtoi(" ++c"), 0);
    });
});