let assert = require('assert');
let findDuplicate = require('./findDuplicate');
describe('findDuplicate', function() {
    it('findDuplicate', function() {
        assert.equal(findDuplicate([1,3,4,2,2]), 2);
        assert.equal(findDuplicate([3,1,3,4,2]), 3);
    });
});