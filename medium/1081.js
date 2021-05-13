var smallestSubsequence = function (s) {
  let seens = new Set();
  let result = [];
  let frequencies = {};
  for (let char of s) {
    frequencies[char] = frequencies[char] ? frequencies[char] + 1 : 1;
  }

  for (let char of s) {
    frequencies[char]--;

    if (seens.has(char)) {
      continue;
    }
    while (
      result.length &&
      result[result.length - 1] > char &&
      frequencies[result[result.length - 1]]
    ) {
      seens.delete(result[result.length - 1]);
      result.pop();
    }

    seens.add(char);
    result.push(char);
  }
  return result.join("");
};
