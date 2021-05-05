var rightSideView = function (root) {
  if (!root) return [];
  let queue = [[root, 1]];
  let result = [root.val];
  let maxDepth = 1;
  if (root.right) queue.push([root.right, 2]);
  if (root.left) queue.push([root.left, 2]);
  let i = 1;
  while (i < queue.length) {
    let curr = queue[i];
    if (curr[1] > maxDepth) {
      maxDepth = curr[1];
      result.push(curr[0].val);
    }
    if (curr[0].right) queue.push([curr[0].right, curr[1] + 1]);
    if (curr[0].left) queue.push([curr[0].left, curr[1] + 1]);

    i++;
  }
  return result;
};
