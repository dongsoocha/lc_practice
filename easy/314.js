// Given an array of integers nums, calculate the pivot index of this array.

// The pivot index is the index where the sum of all the numbers strictly to the left 
// of the index is equal to the sum of all the numbers strictly to the index's right.

// If the index is on the left edge of the array, then the left sum is 0 because there 
// are no elements to the left. This also applies to the right edge of the array.

// Return the leftmost pivot index. If no such index exists, return -1.

var pivotIndex = function(nums) {
    let left = 0;
    let right = 0;
    for (let index = 1; index < nums.length; index++) {
        right += nums[index];
    }
    if (left === right) return 0;
    // set easily referencable left and right; don't have to always iterate through whole array

    for (let potPivot = 1; potPivot < nums.length; potPivot++) {
        // add rightermost left element, (pivot -1) to left
        // subtract pivot element, (pivot) from right
        left += nums[potPivot - 1];
        right -= nums[potPivot];
        if (left === right) return potPivot;
    }

    

    return -1;
}