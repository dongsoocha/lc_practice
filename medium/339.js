var depthSum = function (nestedList, depth = 1) {
  let sum = 0;
  for (let i = 0; i < nestedList.length; i++) {
    let current = nestedList[i];
    console.log(current);
    if (Number.isInteger(current)) {
      sum += current * depth;
    } else {
      let sub = depthSum(current, depth + 1);
      sum += sub;
    }
  }
  return sum;
};

let list1 = [[1, 1], 2, [1, 1]];
let list2 = [1, [4, [6]]];

console.log(depthSum(list1));
console.log(depthSum(list2));

function depthSum(nestedList, depth=1) {
    sum = 0;
    for (let i = 0; i < nestedList.length; i++) {
        if (nestedList[i].isInteger()) {
            sum += nestedList[i].getInteger() * depth;
        } else {
            sum += depthSum(nestedList[i].getList(), depth + 1);
        }
    }
    return sum;
};