var findAndReplacePattern = function (words, pattern) {
  let results = [];
  for (let i = 0; i < words.length; i++) {
    // set to store chars already mapped
    let seens = new Set();

    // map of chars to patternchar
    let map = {};
    let word = words[i];
    let mapped = "";
    for (let j = 0; j < word.length; j++) {
      let char = word[j];
      let patternChar = pattern[j];
      if (seens.has(pattern[j])) {
        if (map[char] === patternChar) {
          mapped += patternChar;
        } else {
          break;
        }
      } else if (map[char]) {
        break;
      } else {
        map[char] = patternChar;
        seens.add(patternChar);
        mapped += patternChar;
      }
    }
    if (mapped === pattern) {
      results.push(word);
    }
  }
  return results;
};
