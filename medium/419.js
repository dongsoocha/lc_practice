var countBattleships = function (board) {
  let battleships = 0; // O(1);

  for (let row = 0; row < board.length; row++) {
    for (let column = 0; column < board[0].length; column++) {
      if (
        board[row][column] === "X" &&
        (!board[row + 1] || board[row + 1][column] !== "X") &&
        (!board[row][column + 1] || board[row][column + 1] !== "X")
      ) {
        battleships++;
      }
    }
  }
  return battleships;
};
