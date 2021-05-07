var canPartitionKSubsets = function (nums, k) {
  let sum = 0;
  for (let num of nums) {
    sum += num;
  }
  //     if sum doesnt divide evenly cannot be true
  if (sum % k !== 0) return false;
  let subSum = sum / k;
  let seens = new Array(nums.length).fill(false);
  let canPartition = function (i = 0, k, currentSum = 0) {
    if (k === 1) return true;
    if (currentSum > subSum) return false;
    if (currentSum === subSum) {
      return canPartition(0, k - 1, 0);
    }
    for (let start = i; start < nums.length; start++) {
      if (!seens[start]) {
        seens[start] = true;
        if (canPartition(start + 1, k, currentSum + nums[start])) {
          return true;
        }
        seens[start] = false;
      }
    }
    return false;
  };

  return canPartition(0, k, 0);
};
