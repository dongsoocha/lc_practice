var killProcess = function (pid, ppid, kill) {
  let parents = {};
  let killed = [];
  for (let i = 0; i < pid.length; i++) {
    parents[pid[i]] = ppid[i];
  }

  for (let i = 0; i < pid.length; i++) {
    let char = pid[i];
    while (char !== 0 && char !== kill) {
      char = parents[char];
    }
    if (char === kill) killed.push(pid[i]);
  }
  return killed;
};
