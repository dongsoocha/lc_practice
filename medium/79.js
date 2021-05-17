var exist = function (board, word) {
  const dfs = function (x, y, idx) {
    if (
      x < 0 ||
      x > board.length - 1 ||
      y < 0 ||
      y > board[0].length ||
      board[x][y] !== word[idx] ||
      board[x][y] === 0
    )
      return false;
    if (board[x][y] === word[idx] && idx === word.length - 1) return true;
    const char = board[x][y];

    let a = x + 1;
    let b = x - 1;
    let c = y + 1;
    let d = y - 1;
    board[x][y] = 0;
    if (
      dfs(a, y, idx + 1) ||
      dfs(b, y, idx + 1) ||
      dfs(x, c, idx + 1) ||
      dfs(x, d, idx + 1)
    )
      return true;

    board[x][y] = char;
    return false;
  };

  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board[0].length; y++) {
      if (dfs(x, y, 0)) return true;
    }
  }

  return false;
};
