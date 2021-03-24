var canPlaceFlowers = function (flowerbed, n) {
    let i = 0;
    let count = 0;
    while (i < flowerbed.length) {
        if (i === 0 && flowerbed[i] === 0 && flowerbed[1] === 0) {
            i += 2;
            count += 1;
        } else if (i === flowerbed.length - 1 && flowerbed[i] === 0 && flowerbed[i -1] === 0) {
            count += 1;
            i += 1;
        }
        else if (flowerbed[i] === 0 && flower[i-1] === 0 && flowerbed[i + 1] === 0) {
            count += 1;
            i += 2;
        }
    }
    return count <= n;

};
