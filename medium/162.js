var findPeakElement = function (nums) {
  let start = 0;
  let end = nums.length - 1;

  while (end > start) {
    let mid = Math.floor((end - start) / 2 + start);
    if (mid === 0) return nums[0] > nums[1] ? 0 : 1;
    if (mid === nums.length - 1)
      return nums[mid] > nums[mid - 1] ? mid : mid - 1;

    if (nums[mid - 1] < nums[mid] && nums[mid + 1] < nums[mid]) {
      return mid;
    } else if (nums[mid - 1] < nums[mid] && nums[mid + 1] > nums[mid]) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }
  return start;
};
