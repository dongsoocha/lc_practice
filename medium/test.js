var filter = function(arr1, arr2) {
    let result = [];
    let filters = new Set();
    arr2.forEach(el => filters.add(el));
    arr1.forEach(el => {
        if (!filters.has(el)) result.push(el);
    })
    return result;
}

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 1];

const result = filter(arr1, arr2);
console.log(result);