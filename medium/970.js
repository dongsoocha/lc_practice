var powerfulIntegers = function (x, y, bound) {
let powerfulIntegers = (x, y, T, N = 20, ans = new Set()) => {
  for (let i = 0; i <= N; ++i) {
    for (let j = 0; j <= N; ++j) {
      let cand = x ** i + y ** j;
      if (cand <= T) ans.add(cand);
    }
  }
  return [...ans];
};
};
