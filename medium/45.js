var jump = function (nums) {
  let currentJump = 0;
  let end = 0;
  let count = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    end = Math.max(end, i + nums[i]);

    if (i === currentJump) {
      count++;
      currentJump = end;
    }
  }
  return count;
};
