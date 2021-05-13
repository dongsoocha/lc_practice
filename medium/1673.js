var mostCompetitive = function (nums, k) {
  //     ensure nums.length = k
  if (k === 0) return [];
  let deleted = 0;
  let toDelete = nums.length - k;
  let stack = [];
  for (let i = 0; i < nums.length; i++) {
    while (stack[stack.length - 1] > nums[i] && deleted < toDelete) {
      stack.pop();
      deleted++;
    }
    stack.push(nums[i]);
  }

  return stack.slice(0, k);
};
