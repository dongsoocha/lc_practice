var findLeastNumOfUniqueInts = function (arr, k) {
  let counts = {};
  for (let num of arr) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }

  //     sort by ascending order, nLogn
  let sorted = Object.keys(counts).sort((a, b) => counts[a] - counts[b]);

  let i = 0;
  while (k > 0 && i < sorted.length) {
    k -= counts[sorted[i]];
    if (k >= 0) {
      i++;
    }
  }
  return k > 0 ? 0 : sorted.length - i;
};
