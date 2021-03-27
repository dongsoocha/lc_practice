var numberOfSteps = function (num) {
    let step = 0;
    while (num > 0) {
        step++;
        if (num % 2 === 0 ) {
            num /= 2;
        } else {
            num -= 1;
        }
    }
    return step;
};
