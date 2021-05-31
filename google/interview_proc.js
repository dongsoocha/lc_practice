var numUniqueEmails = function (emails) {
    let uniques = {};

    for (let idx = 0; idx < emails.length; idx++){
        // email string with . ignored, + ignore all till @
        let returnedString = '';
        const email = emails[idx];
        let i = 0;
        let index = email.indexOf('@');
        while (i < index) {
            if (email[i] === '+'){
                i++;
                while (email[i] !== '@') {
                    i++;
                }
            } else if (email[i] === '.') {
                i++;    
            } else {
                returnedString += email[i];
                i++;
            }
        }
        returnedString += email.slice(index);
        uniques[returnedString] = true;
    }
    return Object.keys(uniques).length;
};

var oddEvenJumps = function (arr) {
    let valids = 0;
    for (let i = 0; i < arr.length; i++) {
        if (checkValid(arr.slice(i))) valids += 1;
    }
    return valids;
};

var checkValid = function(arr) {
    let jump = 1;
    let i = 0;
    while (i < arr.length) {
        let candidate = arr[i];
        if (jump % 2 !== 0 ) {
            let newCandidate;
// odd jump, jump to j where arr[i] <= arr[j] and smallest possible value; if multiple arr[j]'s smallest j
// 
        } else {

        }

        jump++;
    }
    return (i === arr.length - 1);
}

var threeSum = function (nums) {
  let triplets = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) break;
    if (nums[i] === nums[i - 1]) continue;
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum > 0) {
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        triplets.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      }
    }
  }
  return triplets;
};