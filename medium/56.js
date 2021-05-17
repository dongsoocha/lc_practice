var merge = function(intervals) {
//     sort intervals by start of interval
    intervals = intervals.sort((a, b) => a[0] - b[0]);
    let mergeMin = intervals[0][0];
    let mergeMax = intervals[0][1];
    let mergedArrs = [];
    
    for (let i = 1; i < intervals.length; i++) {
        let currMin = intervals[i][0];
        let currMax = intervals[i][1];
        
        if (mergeMax >= currMin) {
            mergeMax = Math.max(mergeMax, currMax);
        } else {
            mergedArrs.push([mergeMin, mergeMax]);
            mergeMin = currMin;
            mergeMax = currMax;
        }
    }
//     push last one in queue that won't be accounted for
    mergedArrs.push([mergeMin, mergeMax]);
    return mergedArrs;
};