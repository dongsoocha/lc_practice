var countBattleships = function (board) {
  let battleships = 0;

  for (let row = 0; row < board.length; row++) {
    for (let column = 0; column < board[0].length; column++) {
      if (board[row][column] === "X") {
        battleships++;
        board[row][column] = ".";
        let newRow = row + 1;
        let newCol = column + 1;
        //                 going down

        while (newRow < board.length && board[newRow][column] === "X") {
          board[newRow][column] = ".";
          newRow++;
        }
        //                 going right
        while (newCol < board[0].length && board[row][newCol] === "X") {
          board[row][newCol] = ".";
          newCol++;
        }
      }
    }
  }
  return battleships;
};
