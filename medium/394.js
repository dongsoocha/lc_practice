// Given an encoded string, return its decoded string.

// The encoding rule is: k[encoded_string], where the encoded_string inside the square
// brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

// You may assume that the input string is always valid; No extra white spaces,
// square brackets are well-formed, etc.

// Furthermore, you may assume that the original data does not contain any digits and
// that digits are only for those repeat numbers, k. For example, there won't be input
// like 3a or 2[4].

var decodeString = function (s) {
  // 2 stacks
  let numStack = [];
  let repeatStack = [];

  let num = "";
  let result = "";
  for (let i = 0; i < s.length; i++) {
    //   if is number
    if (!isNaN(s[i])) {
      num += s[i];
    } else if (s[i] === "[") {
      numStack.push(num);
      num = "";
      repeatStack.push(result);
      result = "";
    } else if (s[i] === "]") {
      result = repeatStack.pop() + result.repeat(numStack.pop());  
    } else {
      result += s[i];
    }
    console.log(result);
    console.log(repeatStack);
  }

  return result;
};

// if (!s.includes('[')) {
//     return s;
// }

// var decodeString = function (s) {
//     let master = '';
//     let stack = [];
//     for (let i = 0; i < s.length; i++) {
//         stack.push(s[i]);
//     }
//     // initialize stack

//     let decoded = '';

//     while (stack.length) {

//         if (stack.pop() === ']') {
//             let count = 1;
//             let subString = '';
//             while (count > 0) {
//                 if
//             }
//         }

//     }
// };

// return decoded;
// Example 1:

// Input: s = "3[a]2[bc]"
// Output: "aaabcbc"
// Example 2:

// Input: s = "3[a2[c]]"
// Output: "accaccacc"
// Example 3:

// Input: s = "2[abc]3[cd]ef"
// Output: "abcabccdcdcdef"
// Example 4:

// Input: s = "abc3[cd]xyz"
// Output: "abccdcdcdxyz"
