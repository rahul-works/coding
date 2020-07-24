let assert = require('assert');
let letterCombinations = require('./letterCombinations');
describe('letterCombinations', function() {
    it('letterCombinations', function() {
        assert.deepEqual(letterCombinations("23"), [ 'ad', 'ae', 'af', 'bd', 'be', 'bf','cd', 'ce', 'cf']);
    });
});
