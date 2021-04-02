var brokenCalc = function (X, Y) {
  let step = 0;
  while (X < Y) {
    step++;
    if (Y % 2 === 1) {
      Y++;
    } else {
      Y /= 2;
    }
  }
  return step + X - Y;
};
