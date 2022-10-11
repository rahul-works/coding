
function timeElapse(grid) { 
  const N = grid.length; // col
  const M = grid[0].length; // row
  const Q = [];
  for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
          if (grid[i][j] === 2) {
              grid[i][j] = 0;
              Q.push([i,j]); // virus
          } else if (grid[i][j] === 1) { 
              grid[i][j] = 0;
          } else if (grid[i][j] === 0) { 
              grid[i][j] = 'v';
          }
      }
  }
  function validCell(cell) {
      let x = cell[0];
      let y = cell[1];
      // bountry
      if (x < 0 || y < 0 || x >= N || y >= M) {
        return false;
    }
    console.log(x, y);
      // check for healthy : 
      if (grid[x][y] !== 0) {
          return false;
      }
      
      // not void
      if (grid[x][y] === 'v') {
          return false;
      }
      return true;
  }
  console.log(grid);
  let start = 0;
  let end = Q.length;
  let maxTime = 0;
  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];
  while (start < Q.length) {
      for (let i = start; i < end; i++) {
          let curX = Number(Q[i][0]);
          let curY = Number(Q[i][1]);
          for (let j = 0; j < 4; j++) {

              let newCell = [Number(dx[j])+curX, Number(dy[j])+curY];

              if (i===1) {
                console.log(Q[1]);
              }
              console.log(newCell, j, i);
              if (validCell(newCell)) { 
                  let nx = newCell[0];
                  let ny = newCell[1]
                  grid[nx][ny] = grid[curX][curY]+1;
                  if (maxTime < grid[nx][ny]) {
                      maxTime = grid[nx][ny];
                  }
                  Q.push(newCell);
              }
          }
      }
      start = end;
      end = Q.length;
  }
  
  // check if any healt cell is still there 
  for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
          if (grid[i][j] === 0) {
              return -1;
          }
      }
  }
  console.log(grid);
  // else return maxTime
  return maxTime;
}

const grid = [[2,1,1],[1,1,0],[0,1,1]];
console.log(timeElapse(grid));