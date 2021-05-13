var removeKdigits = function (num, k) {
  let stack = [];
  let removed = 0;

  for (let i = 0; i < num.length; i++) {
    while (stack[stack.length - 1] > num[i] && removed < k) {
      stack.pop();
      removed++;
    }
    stack.push(num[i]);
  }

  let nonZeroIDX = -1;

  stack = stack.slice(0, stack.length - (k - removed));
  for (let i = 0; i < stack.length; i++) {
    if (stack[i] !== "0") {
      nonZeroIDX = i;
      break;
    }
  }

  if (nonZeroIDX === -1) {
    return "0";
  } else {
    return stack.slice(nonZeroIDX).join("");
  }
};
