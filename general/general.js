// 54

var spiralOrder = function (matrix) {
  const dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  let i = 0;
  let j = 0;
  let dIdx = 0;

  let seens = {};

  let res = [];

  let l = matrix.length * matrix[0].length;

  while (res.length < l) {
    res.push(matrix[i][j]);
    seens[`${i},${j}`] = true;

    let nextI = i + dirs[dIdx][0];
    let nextJ = j + dirs[dIdx][1];
    if (matrix[nextI] && matrix[nextI][nextJ] && !seens[`${nextI},${nextJ}`]) {
      i = nextI;
      j = nextJ;
    } else {
      dIdx = (dIdx + 1) % 4;
      i += dirs[dIdx][0];
      j += dirs[dIdx][1];
    }
  }

  return res;
};
