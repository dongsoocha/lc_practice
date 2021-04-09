var topKFrequent = function (nums, k) {
  let counts = {};
  for (num of nums) {
    counts[num] ? (counts[num] += 1) : (counts[num] = 1);
  }
  return Object.keys(counts)
    .sort((a, b) => counts[b] - counts[a])
    .slice(0, k);
};
