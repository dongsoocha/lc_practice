var numIslands = function (grid) {
    let islandCount = 0;
    for (row = 0; row < grid.length; row++) {
        for (col = 0; col < grid[row].length; col++) {
            if (dfs(grid, row, col)) islandCount += 1;
        }
    }
    return islandCount;
};

var dfs = function (grid, row, col) {
  if (!grid[row] || !grid[row][col]) return;

  grid[row][col] = 0;
  dfs(grid, row, col + 1);
  dfs(grid, row, col - 1);
  dfs(grid, row + 1, col);
  dfs(grid, row - 1, col);
  return 1;
}

[
  (
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"]
  )
];