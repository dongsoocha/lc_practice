var majorityElement = function (nums) {
  let count = 0;
  let candidate = nums[0];

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    if (count === 0) {
      candidate = current;
    }
    if (current === candidate) {
      count++;
    } else {
      count--;
    }
  }

  return candidate;
};
