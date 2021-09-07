var minTaps = function (n, ranges) {
    let maxJumps = new Array(n + 1).fill(0);
    for (let i = 0; i < ranges.length; i++) {
        let left = Math.max(0, i - ranges[i]);
        maxJumps[left] = Math.max(i + ranges[i], maxJumps[left]);
    }

    let jumps = 1;
    let curr = maxJumps[0];
    let next = maxJumps[0];
    for (let i = 1; i < maxJumps.length; i++) {
        if (i > next) return -1;
        if (i > curr) {
            curr = next;
            jumps++;
        }
        if (maxJumps[i] > next) {
            next = maxJumps[i];
        }
    }
};
