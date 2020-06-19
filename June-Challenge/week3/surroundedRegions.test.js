let assert = require('assert');
let surroundedRegions = require('./surroundedRegions');
describe('surroundedRegions', function() {
    it('check surroundedRegions', function() {
        assert.deepEqual(surroundedRegions([["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]), [[ 'X', 'X', 'X', 'X' ],[ 'X', 'X', 'X', 'X' ],[ 'X', 'X', 'X', 'X' ],[ 'X', 'O', 'X', 'X' ]]);
        assert.deepEqual(surroundedRegions([["O","O","O"],["O","O","O"],["O","O","O"]]), [ [ 'O', 'O', 'O' ], [ 'O', 'O', 'O' ], [ 'O', 'O', 'O' ] ]);
    });
});
