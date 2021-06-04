var UndergroundSystem = function () {
  this.checkins = {};
  this.checkouts = {};
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function (id, stationName, t) {
  this.checkins[id] = { stationName, t };
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function (id, stationName, t) {
  const key = `${this.checkins[id].stationName} to ${stationName}`;
  if (!this.checkouts[key]) this.checkouts[key] = { timeSum: 0, count: 0 };
  this.checkouts[key].timeSum += t - this.checkins[id].t;
  this.checkouts[key].count++;
};

/**
 * @param {string} startStation
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function (
  startStation,
  endStation
) {
  const key = `${startStation} to ${endStation}`;
  return this.checkouts[key].timeSum / this.checkouts[key].count;
};
