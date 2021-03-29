var largestAltitude = function (gain) {
    let max = 0;
    let tracker = 0;
    for (let i = 0; i < gain.length; i++) {
        tracker += gain[i];
        if (tracker > max) max = tracker;
    }
    return max;
};
