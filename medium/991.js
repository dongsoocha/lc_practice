var brokenCalc = function (X, Y) {
    let step = 0;
    while (X !== Y) {
        if (Y/2 < X) {
            Y -= 1;
            step++;
        } else {
            Y /= 2;
            step++;
        }
    }
    return step;
};
