var maxAreaOfIsland = function (grid) {
    let maxArea = 0;
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col ++) {
            let curr = dfs(grid, row, col);
            if (curr > maxArea) maxArea = curr;
        }
    }
    return maxArea;
};



var dfs = function (grid, row, col, count = 0) {
    if (!grid[row] || !grid[row][col]) return count;

    count += 1;
    grid[row][col] = 0;
    count = dfs(grid, row, col - 1, count);
    count = dfs(grid, row, col + 1, count);
    count = dfs(grid, row -1, col, count);
    count = dfs(grid, row +1, col, count);
    return count;
}