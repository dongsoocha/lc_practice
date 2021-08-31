var numTilePossibilities = function (tiles) {
  let words = new Set();
  let idxs = new Set();
  const bt = (idx, word = "") => {
    word += tiles[idx];
    words.add(word);
    for (let i = 0; i < tiles.length; i++) {
      if (!idxs.has(i)) {
        idxs.add(i);
        bt(i, word);
        idxs.delete(i);
      }
    }
  };
  let currents = new Set();
  for (let i = 0; i < tiles.length; i++) {
    idxs.add(i);
    bt(i);
    idxs.delete(i);
  }

  return words.size;
};
