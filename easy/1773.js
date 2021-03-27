

var countMatches = function (items, ruleKey, ruleValue) {
    let count = 0;
    switch (ruleKey) {
            case 'type':
                for (item of items) {
                    if (item[0] === ruleValue) count += 1;
                }
            case 'color':
                for (item of items) {
                    if (item[1] === ruleValue) count += 1;
                }
            case 'name':
                for (item of items) {
                    if (item[2] === ruleValue) count += 1;
                }
    }
    return count;
};
