var subsets = function (nums) {
    let subs = [[]];

    for (let i = 0; i < nums.length; i++) {
        let length = subs.length;
        for (let j = 0; j < length; j++) {
            subs.push([...subs[j], nums[i]]);
        }
    }
    return subs;
};
