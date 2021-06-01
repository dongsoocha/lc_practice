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

var nextPermutation = function (nums) {
  //     find first where prev less than next
  //     replace with minimum element afterwards greater than afterwards
  //     reverse remaining
  //     return nums
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      let minIdx;
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[j] <= nums[i]) {
          minIdx = j - 1;
          break;
        } else if (j === nums.length - 1) {
          minIdx = j;
        }
      }
      let tmp = nums[i];
      nums[i] = nums[minIdx];
      nums[minIdx] = tmp;
      let left = i + 1;
      let right = nums.length - 1;
      while (left < right) {
        let tmp = nums[left];
        nums[left] = nums[right];
        nums[right] = tmp;
        left++;
        right--;
      }
      break;
    }

    if (i === 0) return nums.sort((a, b) => a - b);
  }
  return nums;
};

var rotate = function (matrix) {
  //     transpose along dia
  const mid = Math.floor(matrix.length / 2);
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (j >= i) continue;
      let tmp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = tmp;
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < mid; j++) {
      let tmp = matrix[i][j];
      matrix[i][j] = matrix[i][matrix.length - 1 - j];
      matrix[i][matrix.length - 1 - j] = tmp;
    }
  }
  return matrix;
};

var canJump = function (nums) {
  let max = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (i > max) return false;
    if (i === nums.length - 1) return true;

    if (i + nums[i] > max) max = i + nums[i];
  }
};

var plusOne = function (digits) {
  if (!digits) return [];
  let sum = digits[digits.length - 1] + 1;
  if (sum < 10) {
    digits[digits.length - 1] = sum;
    return digits;
  } else {
    if (digits.length === 1) return [1, 0];
    let carry = true;
    digits[digits.length - 1] = 0;
    let currIdx = digits.length - 2;
    while (carry) {
      let potential = digits[currIdx] + 1;
      if (potential < 10) {
        digits[currIdx] = potential;
        carry = false;
      } else {
        digits[currIdx] = 0;

        if (currIdx === 0) {
          carry = false;
          digits.unshift(1);
        }
        console.log(digits);
      }
      currIdx--;
    }
  }
  return digits;
};