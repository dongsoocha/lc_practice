var searchRange = function (nums, target) {
  let startIdx, endIdx;

  //     for left side
  let end = nums.length - 1;
  let start = 0;
  while (end >= start) {
    if (start === end) {
      startIdx = nums[start] === target ? start : -1;
      break;
    }

    let middle = Math.floor((end - start) / 2) + start;
    if (
      nums[middle] === target &&
      (middle === 0 || nums[middle - 1] !== target)
    ) {
      startIdx = middle;
      break;
    } else if (
      nums[middle] > target ||
      (nums[middle] === target && nums[middle - 1] === target)
    ) {
      end = middle;
    } else {
      start = middle + 1;
    }
  }

  //     for rightSide

  end = nums.length - 1;
  start = 0;
  while (end >= start) {
    if (start === end) {
      endIdx = nums[start] === target ? start : -1;
      break;
    }
    let middle = Math.floor((end - start) / 2) + start;
    if (
      nums[middle] === target &&
      (middle === nums.length || nums[middle + 1] !== target)
    ) {
      endIdx = middle;
      break;
    } else if (
      nums[middle] < target ||
      (nums[middle] === target && nums[middle + 1] === target)
    ) {
      start = middle + 1;
    } else {
      end = middle;
    }
  }
  startIdx = startIdx === undefined ? -1 : startIdx;
  endIdx = endIdx === undefined ? -1 : endIdx;

  return [startIdx, endIdx];
};
