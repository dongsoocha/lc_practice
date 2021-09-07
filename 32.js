var longestValidParentheses = function (s) {
  // if negative, reset start to new place
  // keep track of longest encountered and whether chainable with current
  // if break,not chainable, go to newest valid

  let maxLength = 0;
  let left = 0;
  let right = 0;
  for (let i = 0; i < s.length; i++) {
    s[i] === "(" ? left++ : right++;
    if (left === right) {
      maxLength = Math.max(maxLength, left * 2);
    } else if (right >= left) {
      left = right = 0;
    }
  }
  left = right = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    s[i] === "(" ? left++ : right++;
    if (left === right) {
      maxLength = Math.max(maxLength, left * 2);
    } else if (left >= right) {
      left = right = 0;
    }
  }
  return maxLength;
};
