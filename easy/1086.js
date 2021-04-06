var highFive = function (items) {
  let scores = {};

  for (let i = 0; i < items.length; i++) {
    const studentId = items[i][0];
    if (scores[studentId]) {
      scores[studentId].push(items[i][1]);
    } else {
      scores[studentId] = [];
      scores[studentId].push(items[i][1]);
    }
  }
  let avgs = [];
  Object.keys(scores).forEach((student) => {
    const studentScore = scores[student]
      .sort((a, b) => a - b)
      .slice(scores[student].length - 5);
    let sum = 0;
    studentScore.forEach((score) => (sum += score));
    avgs.push([student, Math.floor(sum / 5)]);
  });

  return avgs;
};
