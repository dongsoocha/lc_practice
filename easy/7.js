var reverse = function (x) {
  let result = 0;
  let negative = false;
  if (x < 0) negative = true;
  x = Math.abs(x);
  let max = (2 ** 31 - 1) / 10;
  while (x !== 0) {
    if (result > max) return 0;
    result = result * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  return negative ? -result : result;
};
