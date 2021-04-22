var isRobotBounded = function (instructions) {
  var position = [0, 0];
  const directionDic = [
    [1, 0],
    [0, -1],
    [-1, 0],
    [0, 1],
  ];

  let dir = 0;
  for (let i = 0; i < instructions.length; i++) {
    let char = instructions[i];
    let direction = directionDic[dir];
    switch (char) {
      case "R":
        dir = (dir + 1 + 4) % 4;
        break;
      case "L":
        dir = (dir - 1 + 4) % 4;
        break;
      case "G":
        position[0] += direction[0];
        position[1] += direction[1];
    }
  }
  if (dir !== 0 || (position[0] === 0 && position[1] === 0)) return true;
  return false;
};
