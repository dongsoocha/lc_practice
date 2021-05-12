var maxLength = function (arr) {
  let uniqEls = [];
  arr.forEach((el) => {
    let uniq = new Set(el.split(""));
    if (el.length === uniq.size) uniqEls.push(el);
  });
  let maxLength = 0;
  console.log(uniqEls);
  function backtrack(i, str = "") {
    str += uniqEls[i];
    let uniqStr = new Set(str.split(""));
    if (str.length === uniqStr.size) {
      maxLength = maxLength >= str.length ? maxLength : str.length;
      for (let a = i + 1; a < uniqEls.length; a++) {
        backtrack(a, str);
      }
    }
  }

  for (let i = 0; i < uniqEls.length; i++) {
    backtrack(i);
  }
  return maxLength;
};
