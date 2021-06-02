var carPooling = function (trips, capacity) {
  let passengers = new Array(1001).fill(0);
  trips.forEach((trip) => {
    passengers[trip[1]] += trip[0];
    passengers[trip[2]] -= trip[0];
  });
  for (let i = 1; i < passengers.length; i++) {
    passengers[i] += passengers[i - 1];
  }

  passengers = passengers.filter((a) => a > capacity);
  return passengers.length ? false : true;
};
