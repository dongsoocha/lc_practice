var addTwoNumbers = function (l1, l2) {
  let carry = 0;
  let one = l1;
  let two = l2;
  let head = new ListNode(0);
  let c = head;

  while (one || two) {
    let x = one ? one.val : 0;
    let y = two ? two.val : 0;
    sum = carry + x + y;
    carry = Math.floor(sum / 10);

    next = sum % 10;
    c.next = new ListNode(next);
    c = c.next;
    if (one) one = one.next;
    if (two) two = two.next;
  }

  if (carry > 0) {
    c.next = new ListNode(carry);
  }

  return head.next;
};
