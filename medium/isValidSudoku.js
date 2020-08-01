/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    
    let colCheck = [];
    let boxCheck = [];
    for (const col in board) {
        let rowCheck = [];
        for (const row in board[col]) {
            colCheck[row] = [];
            // check all rows
            if (board[col][row] !== "." && rowCheck.indexOf(board[col][row]) === -1) {
                rowCheck.push(board[col][row]);
            } else {
                if (board[col][row] !== "." && rowCheck.indexOf(board[col][row]) > -1) {
                    return false;
                }
            }
            // check all columns 
            if (board[row][col] !== ".") {
                if (colCheck[col].indexOf(board[row][col]) === -1) {
                    colCheck[col].push(board[row][col]);
                } else if (colCheck[col].indexOf(board[row][col]) > -1 ) {
                    return false;
                }
            }
            
            console.log(colCheck[3], board[row][col], colCheck[col].indexOf(board[row][col]), board[row][col] !== "." && colCheck[col].indexOf(board[row][col]) > -1, board[row][col] !== "." && colCheck[col].indexOf(board[row][col]) === -1);
            // check each box 
            if (col < 3) {
                if (row < 3) {
                    if (boxCheck[0] === undefined) {
                        boxCheck[0] = [];
                    }
                    if (board[col][row] !== "." && boxCheck[0].indexOf(board[col][row]) === -1) {
                        boxCheck[0].push(board[col][row]);
                    } else {
                        if (board[col][row] !== "." && boxCheck[0].indexOf(board[col][row]) > -1) {
                            return false;
                        }
                    }
                } else if (row < 6) {
                    if (boxCheck[1] === undefined) {
                        boxCheck[1] = [];
                    }
                    if (board[col][row] !== "." && boxCheck[1].indexOf(board[col][row]) === -1) {
                        boxCheck[1].push(board[col][row]);
                    } else {
                        if (board[col][row] !== "." && boxCheck[1].indexOf(board[col][row]) > -1) {
                            return false;
                        }
                    }
                } else { // last box
                    if (boxCheck[2] === undefined) {
                        boxCheck[2] = [];
                    }
                    if (board[col][row] !== "." && boxCheck[2].indexOf(board[col][row]) === -1) {
                        boxCheck[2].push(board[col][row]);
                    } else {
                        if (board[col][row] !== "." && boxCheck[2].indexOf(board[col][row]) > -1) {
                            return false;
                        }
                    }
                }
            } else if (col < 6) {
                if (row < 3) {
                    if (boxCheck[3] === undefined) {
                        boxCheck[3] = [];
                    }
                    if (board[col][row] !== "." && boxCheck[3].indexOf(board[col][row]) === -1) {
                        boxCheck[3].push(board[col][row]);
                    } else {
                        if (board[col][row] !== "." && boxCheck[3].indexOf(board[col][row]) > -1) {
                            return false;
                        }
                    }
                } else if (row < 6) {
                    if (boxCheck[4] === undefined) {
                        boxCheck[4] = [];
                    }
                    if (board[col][row] !== "." && boxCheck[4].indexOf(board[col][row]) === -1) {
                        boxCheck[4].push(board[col][row]);
                    } else {
                        if (board[col][row] !== "." && boxCheck[4].indexOf(board[col][row]) > -1) {
                            return false;
                        }
                    }
                } else { // last box
                    if (boxCheck[5] === undefined) {
                        boxCheck[5] = [];
                    }
                    if (board[col][row] !== "." && boxCheck[5].indexOf(board[col][row]) === -1) {
                        boxCheck[5].push(board[col][row]);
                    } else {
                        if (board[col][row] !== "." && boxCheck[5].indexOf(board[col][row]) > -1) {
                            return false;
                        }
                    }
                }
            } else {
                if (row < 3) {
                    if (boxCheck[6] === undefined) {
                        boxCheck[6] = [];
                    }
                    if (board[col][row] !== "." && boxCheck[6].indexOf(board[col][row]) === -1) {
                        boxCheck[6].push(board[col][row]);
                    } else {
                        if (board[col][row] !== "." && boxCheck[6].indexOf(board[col][row]) > -1) {
                            return false;
                        }
                    }
                } else if (row < 6) {
                    if (boxCheck[7] === undefined) {
                        boxCheck[7] = [];
                    }
                    if (board[col][row] !== "." && boxCheck[7].indexOf(board[col][row]) === -1) {
                        boxCheck[7].push(board[col][row]);
                    } else {
                        if (board[col][row] !== "." && boxCheck[7].indexOf(board[col][row]) > -1) {
                            return false;
                        }
                    }
                } else { // last box
                    if (boxCheck[8] === undefined) {
                        boxCheck[8] = [];
                    }
                    if (board[col][row] !== "." && boxCheck[8].indexOf(board[col][row]) === -1) {
                        boxCheck[8].push(board[col][row]);
                    } else {
                        if (board[col][row] !== "." && boxCheck[8].indexOf(board[col][row]) > -1) {
                            return false;
                        }
                    }
                }
            }
        }
    }
    return true;
};

// console.log(isValidSudoku([
// ["5","3",".",".","7",".",".",".","."],
// ["6",".",".","1","9","5",".",".","."],
// [".","9","8",".",".",".",".","6","."],
// ["8",".",".",".","6",".",".",".","3"],
// ["4",".",".","8",".","3",".",".","1"],
// ["7",".",".",".","2",".",".",".","6"],
// [".","6",".",".",".",".","2","8","."],
// [".",".",".","4","1","9",".",".","5"],
// [".",".",".",".","8",".",".","7","9"]])); // true

// console.log(isValidSudoku([
//     ["8","3",".",".","7",".",".",".","."],
//     ["6",".",".","1","9","5",".",".","."],
//     [".","9","8",".",".",".",".","6","."],
//     ["8",".",".",".","6",".",".",".","3"],
//     ["4",".",".","8",".","3",".",".","1"],
//     ["7",".",".",".","2",".",".",".","6"],
//     [".","6",".",".",".",".","2","8","."],
//     [".",".",".","4","1","9",".",".","5"],
//     [".",".",".",".","8",".",".","7","9"]
//   ])); // false

console.log(isValidSudoku([[".",".","4",".",".",".","6","3","."],
[".",".",".",".",".",".",".",".","."],
["5",".",".",".",".",".",".","9","."],
[".",".",".","5","6",".",".",".","."],
["4",".","3",".",".",".",".",".","1"],
[".",".",".","7",".",".",".",".","."],
[".",".",".","5",".",".",".",".","."],
[".",".",".",".",".",".",".",".","."],
[".",".",".",".",".",".",".",".","."]])); // false

// console.log(isValidSudoku([
// [".","1",".","5","2",".",".",".","."],
// [".",".",".",".",".","6","4","3","."],
// [".",".",".",".",".",".",".",".","."],
// ["5",".",".",".",".",".","9",".","."],
// [".",".",".",".",".",".",".","5","."],
// [".",".",".","5",".",".",".",".","."],
// ["9",".",".",".",".","3",".",".","."],
// [".",".","6",".",".",".",".",".","."],
// [".",".",".",".",".",".",".",".","."]]));