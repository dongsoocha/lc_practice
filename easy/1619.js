// Given an integer array arr, return the mean of the remaining integers after 
// removing the smallest 5% and the largest 5% of the elements.

var trimMean = function (arr) {
    const segment = arr.length / 20;
    let sorted = arr.sort();

    let sum = 0;
    for (let i = segment; i < arr.length - segment; i++) {
        sum += arr[i];
    }

    return sum / (arr.length - 2 * segment);
};
