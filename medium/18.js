var fourSum = function (nums, target) {
  //O(n log n )
  nums.sort((a, b) => a - b);

  let quads = [];

  let first = 0;

  //while loop total is n^3
  while (first < nums.length - 3) {
    //O(n)
    let second = first + 1;
    while (second < nums.length - 2) {
      //O(n)
      let third = second + 1;
      let fourth = nums.length - 1;
      const subTarget = target - nums[first] - nums[second];
      while (third < fourth) {
        //O(n)
        if (nums[third] + nums[fourth] === subTarget) {
          quads.push([nums[first], nums[second], nums[third], nums[fourth]]);
          while (nums[fourth] === nums[fourth - 1]) fourth--;
          while (nums[third] === nums[third + 1]) third++;
          fourth--;
          third++;
        } else if (nums[third] + nums[fourth] > subTarget) {
          fourth--;
        } else {
          third++;
        }
      }
      while (nums[second] === nums[second + 1]) second++;
      second++;
    }
    while (nums[first] === nums[first + 1]) first++;
    first++;
  }

  return quads;
};
