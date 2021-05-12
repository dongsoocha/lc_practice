var shortestDistance = function (grid) {
  let candidates = new Array(grid.length)
    .fill(null)
    .map(() => new Array(grid[0].length).fill(0));
  let distances = new Array(grid.length)
    .fill(null)
    .map(() => new Array(grid[0].length).fill(0));
  let buildings = 0;
  let sDistance = Infinity;

  const bfs = function (x, y) {
    let visiteds = new Array(grid.length)
      .fill(null)
      .map(() => new Array(grid[0].length).fill(0));
    let queue = [[x, y]];
    let distance = [0];

    while (queue.length) {
      let [i, j] = queue.shift();
      let currDist = distance.shift();

      const directions = [
        [i + 1, j],
        [i - 1, j],
        [i, j + 1],
        [i, j - 1],
      ];

      directions.forEach((direction) => {
        let [a, b] = direction;
        if (
          a >= 0 &&
          a < grid.length &&
          b >= 0 &&
          b < grid[0].length &&
          !visiteds[a][b] &&
          grid[a][b] === 0
        ) {
          queue.push([a, b]);
          distance.push(currDist + 1);
          distances[a][b] += currDist + 1;
          candidates[a][b] += 1;
          visiteds[a][b] = 1;
        }
      });
    }
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        buildings++;
        bfs(i, j);
      }
    }
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 0 && candidates[i][j] === buildings) {
        sDistance = Math.min(distances[i][j], sDistance);
      }
    }
  }

  return sDistance === Infinity ? -1 : sDistance;
};
