var numberOfMatches = function (n) {
    if (n === 1) return 0;
    let teamNum = n;
    matches = 0;
    if (n % 2 === 0) {
        // even case
        matches += teamNum / 2;
        teamNum /= 2;
    } else {
        // odd case
        
        matches += (teamNum - 1) / 2;
        teamNum = (teamNum - 1) / 2 + 1;
    }
    return matches + numberOfMatches(teamNum);
};
