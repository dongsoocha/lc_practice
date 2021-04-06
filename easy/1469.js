var getLonelyNodes = function (root) {
  let lonelies = [];
  if (!root.left && !root.right) return [];
  //     checker for left or right is lonely
  if (!root.left && root.right) {
    lonelies.push(root.right.val);

    return lonelies.concat(getLonelyNodes(root.right));
  }
  if (!root.right && root.left) {
    lonelies.push(root.left.val);

    return lonelies.concat(getLonelyNodes(root.left));
  }

  return lonelies.concat(getLonelyNodes(root.left), getLonelyNodes(root.right));
};
``