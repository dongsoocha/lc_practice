var powerfulIntegers = function (x, y, bound) {
    let answers = {};
    let i = 0;
    let j = 0;
    while (x ** i < bound) {
        i++;
    }
    while (y ** j < bound) {
        j++;
    }
    for (let a = 0; a < i; a++) {
        for (let b = 0; b < j; b++) {
            const ans = x ** a + y ** b;
            if (ans <= bound) answers[ans] = true;
        }
    }
    for (let b = 0; b < j; b++) {
        for (let a = 0; a < i; a++) {
            const ans = x ** a + y ** b;
            if (ans <= bound) answers[ans] = true;
        }
    }

    return Object.keys(answers);
};
