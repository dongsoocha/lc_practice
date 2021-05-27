var intervalIntersection = function (A, B) {
  let first = 0;
  let second = 0;
  let intersections = [];
  while (first < A.length && second < B.length) {
    if (A[first][0] <= B[second][0]) {
      if (A[first][1] <= B[second][1]) {
        if (B[second][0] <= A[first][1])
          intersections.push([B[second][0], A[first][1]]);
        first++;
      } else {
        intersections.push(B[second]);
        second++;
      }
    } else {
      if (B[second][1] <= A[first][1]) {
        if (A[first][0] <= B[second][1])
          intersections.push([A[first][0], B[second][1]]);
        second++;
      } else {
        intersections.push(A[first]);
        first++;
      }
    }
  }
  return intersections;
};
