var minTaps = function (n, ranges) {
  let watered = new Array(ranges.length).fill(0);

  for (let i = 0; i < ranges.length; i++) {
    //         starting position for current interval
    let start = Math.max(0, i - ranges[i]);

    //         get biggest jump from starting point
    watered[start] = Math.max(watered[start], i + ranges[i]);
  }

  let [start, end] = [0, 0];
  let numJumps = 0;

  while (end < n) {
    let furthest = 0;
    numJumps++;

    for (let a = start; a <= end; a++) {
      //             go from current interval and reset furthest Jump from that interval
      furthest = Math.max(furthest, watered[a]);
    }
    //         handle if gap
    if (!furthest) return -1;
    //         reset start ti 1 after end
    start = end + 1;
    //         reset end to furthest
    end = furthest;
  }
  return numJumps;
};
