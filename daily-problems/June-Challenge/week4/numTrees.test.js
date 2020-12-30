let assert = require('assert');
let numTrees = require('./numTrees');
describe('check unique BST', function() {
    it('unique BST count', function() {
        assert.equal(numTrees(3), 5);
    });
});