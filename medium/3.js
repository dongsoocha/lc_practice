var lengthOfLongestSubstring = function (s) {
  let indexes = {};
  let start = 0;
  let end = 0;
  if (!s) return 0;
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (indexes[char] !== undefined && indexes[char] >= start) {
      start = indexes[char] + 1;
      indexes[char] = i;
    } else {
      indexes[char] = i;
      let length = i - start + 1;
      if (length > max) max = length;
    }
  }
  return max;
};
