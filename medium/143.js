var reorderList = function (head) {
  let list = [];

  let current = head;
  while (current) {
    list.push(current);
    current = current.next;
  }

  let length = list.length - 1;
  let mid = Math.floor(length / 2);
  for (let i = 0; i <= mid; i++) {
    let right = length - i;
    right !== i ? (list[i].next = list[right]) : (list[i].next = null);
    right > i + 1
      ? (list[right].next = list[i + 1])
      : (list[right].next = null);
  }
};
