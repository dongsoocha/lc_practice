var trap = function(height) {
    let left = 0;
    let right = height.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    
    
    let acc = 0;
    
    while (left < right) {
        if (height[left] < height[right]) {
            height[left] < leftMax ? acc += leftMax - height[left] : leftMax = height[left];
            left++;
        } else {
            height[right] < rightMax ? acc += rightMax - height[right] : rightMax = height[right];
            right--;
        }
    }
    return acc;
};