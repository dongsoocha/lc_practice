var detectCycle = function (head) {
  let slow = head;
  let fast = head;
  let intersection;
  while (fast) {
    if (!fast.next) {
      return null;
    } else {
      fast = fast.next.next;
      slow = slow.next;
    }
    if (fast === slow) {
      intersection = fast;
      break;
    }
  }
  if (!fast) return null;
  let finder = head;
  while (finder !== intersection) {
    finder = finder.next;
    intersection = intersection.next;
  }
  return intersection;
};
