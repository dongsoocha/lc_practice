var countLetters = function (S) {
    let counter = 0;
    let i = 0;
    let j = 0;
    while (j < S.length) {
        if (S[i] === S[j]) {
            counter++;
            j++;
        } else {
            i++;
            j = i;
        }
    }
    return counter;
};
