let assert = require('assert');
let reverseString = require('./reverseString');
describe('reverse String', function() {
    it('check # hello', function() {
        assert.deepEqual(reverseString(["h","e","l","l","o"]), [ 'o', 'l', 'l', 'e', 'h' ]);
    });
});
