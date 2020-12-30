/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    if (!board.length) {
        return ;
    }
    for (let row = 0; row<board.length; row += 1) {
        dfs (board, row, 0);
        dfs (board, row, board[0].length-1);
    }
    for (let col = 0; col<board[0].length; col += 1) {
        dfs (board, 0, col);
        dfs (board, board.length-1, col);
    }
    for (let row = 0; row<board.length; row += 1) {
        for (let col = 0; col<board[0].length; col += 1) {
            if(board[row][col] === 'O') {
                board[row][col] = 'X';
            }
            if(board[row][col] === '.') {
                board[row][col] = 'O';
            }
        }
    }
    return board;
};


function dfs (board, row, col) {
    if (row >= 0 && row < board.length && col >= 0 && col < board[0].length && board[row][col] === 'O') {
        board[row][col] = '.';
        dfs (board, row-1, col);
        dfs (board, row+1, col);
        dfs (board, row, col-1);
        dfs (board, row, col+1);
    }
    return;
}

// console.log(solve([["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]));
// console.log(solve([["O","O","O"],["O","O","O"],["O","O","O"]]));
module.exports = solve;