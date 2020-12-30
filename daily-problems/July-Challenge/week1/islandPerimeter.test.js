let assert = require('assert');
let islandPerimeter = require('./islandPerimeter');
describe('islandPerimeter', function() {
    it('islandPerimeter', function() {
        assert.equal(islandPerimeter([[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]), 16);
    });
});