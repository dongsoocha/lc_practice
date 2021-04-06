var addStrings = function (num1, num2) {
  let carry = 0;
  let result = "";
  const dictionary = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  while (num1.length !== num2.length) {
    if (num1.length > num2.length) {
      num2 = "0" + num2;
    } else {
      num1 = "0" + num1;
    }
  }

  let i = num1.length - 1;
  while (i >= 0) {
    const a = num1[i];
    const b = num2[i];
    //         add 2 according to
    const sum = dictionary[a] + dictionary[b] + carry;
    carry = sum >= 10 ? 1 : 0;
    result = `${sum % 10}` + result;
    i--;
  }
  if (carry === 1) result = `${1}` + result;
  return result;
};
