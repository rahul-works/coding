let assert = require('assert');
let searchInsert = require('./searchInsert');
describe('search Insert', function() {
    it('check search Insert', function() {
        assert.equal(searchInsert([1,3,5,6],5), 2);
        assert.equal(searchInsert([1,3,5,6],7), 4);
    });
});
