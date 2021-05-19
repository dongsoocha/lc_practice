var maxArea = function (height) {
  let most = 0;
  let leftBorder = 0;
  let rightBorder = height.length - 1;
  while (leftBorder !== rightBorder) {
    let volume =
      Math.min(height[leftBorder], height[rightBorder]) *
      (rightBorder - leftBorder);

    most = volume > most ? volume : most;
    if (height[leftBorder] < height[rightBorder]) {
      leftBorder++;
    } else {
      rightBorder--;
    }
  }

  return most;
};
