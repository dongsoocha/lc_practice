var shortestPath = function (grid, k) {
  let seens = new Set();

  let queue = [{ x: 0, y: 0, steps: 0, elims: 0 }];

  while (queue.length) {
    let curr = queue.shift();
    let coord = `${curr.x},${curr.y},${curr.elims}`;

    if (
      curr.x < 0 ||
      curr.x > grid.length - 1 ||
      curr.y < 0 ||
      curr.y > grid[0].length - 1 ||
      seens.has(coord) ||
      curr.elims > k
    ) {
      continue;
    }

    if (grid[curr.x][curr.y] === 1) {
      curr.elims++;
    }
    if (curr.x === grid.length - 1 && curr.y === grid[0].length - 1) {
      return curr.steps;
    }

    seens.add(coord);

    queue.push({
      x: curr.x + 1,
      y: curr.y,
      steps: curr.steps + 1,
      elims: curr.elims,
    });
    queue.push({
      x: curr.x - 1,
      y: curr.y,
      steps: curr.steps + 1,
      elims: curr.elims,
    });
    queue.push({
      x: curr.x,
      y: curr.y + 1,
      steps: curr.steps + 1,
      elims: curr.elims,
    });
    queue.push({
      x: curr.x,
      y: curr.y - 1,
      steps: curr.steps + 1,
      elims: curr.elims,
    });
  }

  return -1;
};
