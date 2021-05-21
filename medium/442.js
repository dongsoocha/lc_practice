var findDuplicates = function (nums) {
  let results = [];
  for (let i = 0; i < nums.length; i++) {
    let tickIdx = Math.abs(nums[i]) - 1;
    if (nums[tickIdx] < 0) {
      results.push(tickIdx + 1);
    }
    nums[tickIdx] *= -1;
  }

  return results;
};
