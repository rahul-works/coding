function bfs(row, col, R, C, grid) {
  for (let i = row; i < R; i++) { // top to down
    if (i+1 < R && Math.abs(grid[i][col]-grid[i+1][col]) > 1) {
      if (grid[i+1][col] < grid[i][col])
        grid[i+1][col]++;
      else 
        grid[i][col]++;
      count++;
    }
  }

  // down to top 
  for (let i = row; i >= 0; i--) { 
    if (i-1 >= 0 && Math.abs(grid[i][col]-grid[i-1][col]) > 1) {
      if (grid[i-1][col] < grid[i][col])
        grid[i-1][col]++;
      else 
        grid[i][col]++;
      count++;
    }
  }

  // left to righ t
  for (let i = col; i < C; i++) { 
    if (i+1 < C && Math.abs(grid[row][i]-grid[row][i+1]) > 1) {
      if (grid[row][i+1] < grid[row][i])
        grid[row][i+1]++;
      else 
        grid[row][i]++; 
      count++;
    }
  }

  // righ t to left 
  for (let i = col; i >= 0; i--) { 
    if (i-1 >= 0 && Math.abs(grid[row][i]-grid[row][i-1]) > 1) {
      if (grid[row][i-1] < grid[row][i])
        grid[row][i-1]++;
      else 
        grid[row][i]++;
      count++;
    }
  }
}
let count = 0;
function RabbitHouse(R, C, grid) {
  bfs(0, 0, R, C, grid);
  return count;
}

let R = 1, C = 3;
let grid = [3, 4, 3];
R = 1;
C = 3;
grid = [3, 0, 0];
console.log(RabbitHouse(R, C, grid));