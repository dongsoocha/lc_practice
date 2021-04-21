var deleteAndEarn = function (nums) {
  if (!nums.length) return 0;

  const max = Math.max(...nums);

  let earnings = Array(max + 1).fill(0);

  for (let i = 0; i < nums.length; i++) {
    const index = nums[i];

    earnings[index] += index;
  }

  let evenSum = 0;
  let oddSum = 0;

  for (let i = 0; i < earnings.length; i++) {
    if (i % 2 === 0) {
      evenSum = Math.max(evenSum + (earnings[i] || 0), oddSum);
    } else {
      oddSum = Math.max(oddSum + (earnings[i] || 0), evenSum);
    }
  }

  return Math.max(oddSum, evenSum);
};
