var maxSubArray = function (nums) {
  let curr = 0;
  let max = nums[0];
  let sum = 0;
  while (curr < nums.length) {
    sum += nums[curr];
    if (nums[curr] > sum) {
      sum = nums[curr];
    }
    if (sum > max) {
      max = sum;
    }
    curr++;
  }

  return max;
};
