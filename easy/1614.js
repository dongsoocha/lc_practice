var maxDepth = function (s) {
      let left = 0;
      let  right = 0;
      return s.split("").reduce((depth, c) => {
        if (c === "(") l++;
        if (c === ")") r++;
        return Math.max(l - r, depth);
      }, 0);
};
