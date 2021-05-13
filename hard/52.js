

var totalNQueens = function (n) {
  let emptyBoard = new Array(n).fill(0).map(() => new Array(n).fill("."));
  let result = 0;

  let columns = new Array(n).fill(false);
  let dia1 = new Array(n * 2 - 1).fill(false);
  let dia2 = new Array(n * 2 - 1).fill(false);

  function place(i, j) {
    const one = i + n - j - 1;
    const two = i + j;

    if (columns[j] || dia1[one] || dia2[two]) {
      return;
    }

    emptyBoard[i][j] = "Q";
    columns[j] = true;
    dia1[one] = true;
    dia2[two] = true;

    if (i === n - 1) {
      result++;
    } else {
      for (let k = 0; k < n; k++) {
        place(i + 1, k);
      }
    }

    emptyBoard[i][j] = ".";
    columns[j] = false;
    dia1[one] = false;
    dia2[two] = false;
  }

  for (let k = 0; k < n; k++) {
    place(0, k);
  }

  return result;
};