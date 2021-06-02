var minMeetingRooms = function (intervals) {
  //     maximum number of overlaps at any given point;

  //     sort
  let starts = [];
  let ends = [];
  for (let interval of intervals) {
    starts.push(interval[0]);
    ends.push(interval[1]);
  }

  starts.sort((a, b) => a - b);
  ends.sort((a, b) => a - b);

  let currEnd = 0;
  let minRooms = 0;
  for (let i = 0; i < starts.length; i++) {
    if (starts[i] < ends[currEnd]) {
      minRooms++;
    } else {
      // while (starts[i] > ends[currEnd]) {
      currEnd++;
      // }
    }
  }

  return minRooms;
};
