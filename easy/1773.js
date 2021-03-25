

var countMatches = function (items, ruleKey, ruleValue) {
    let count = 0;
    for (item of items) {
        switch (ruleKey) {
            case 'type':
                if (item[0] === ruleValue) count += 1;
            case 'color':
                if (item[1] === ruleValue) count += 1;
            case 'name':
                if (item[2] === ruleValue) count += 1;
        }
    }
    return count;
};
