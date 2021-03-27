var sumOfUnique = function (nums) {
    let sum = 0;
    nums.forEach((num) => {
      if (nums.indexOf(num) === nums.lastIndexOf(num)) {
        sum += num;
      }
    });
    return sum;
};
