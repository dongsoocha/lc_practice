var sumZero = function (n) {
  let result = [];

  let upto = Math.floor(n / 2);
  for (let i = 1; i <= upto; i++) {
    result.push(i, -i);
  }
  if (n % 2) result.push(0);
  return result;
};
