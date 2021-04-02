var arraysIntersection = function (arr1, arr2, arr3) {
    let commons = {};
    const long = arr1.concat(arr2, arr3);
    for (let i = 0; i < long.length; i++) {
        const current = long[i];
        commons[current] ? (commons[current] += 1) : (commons[current] = 1);
    }

    return Object.keys(commons).filter((key) => commons[key] === 3);
};
