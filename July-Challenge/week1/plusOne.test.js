let assert = require('assert');
let plusOne = require('./plusOne');
describe('plusOne', function() {
    it('plusOne', function() {
        assert.deepEqual(plusOne([1,2,3]), [1,2,4]);
        assert.deepEqual(plusOne([4,3,2,1]), [4,3,2,2]);
        assert.deepEqual(plusOne([9]), [1,0]);
        assert.deepEqual(plusOne([9, 9]), [1,0,0]);
        assert.deepEqual(plusOne([9, 9, 9]), [1, 0, 0, 0]);
    });
});