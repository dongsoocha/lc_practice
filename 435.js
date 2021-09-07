var eraseOverlapIntervals = function (intervals) {
  //sort by start
  intervals.sort((a, b) => a[0] - b[0]);
  console.log(intervals);
  end = intervals[0][1];
  prev = 0;
  count = 0;
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[prev][1] > intervals[i][0]) {
      if (intervals[prev][1] > intervals[i][1]) {
        prev = i;
      }
      count++;
    } else {
      prev = i;
    }
  }

  return count;
};
