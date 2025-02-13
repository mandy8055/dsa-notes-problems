function reverseListItr(head: ListNode | null): ListNode | null {
  let curr: ListNode | null = head;
  let prev: ListNode | null = null;
  let prevToPrev: ListNode | null = null;
  while (curr) {
    prev = curr;
    curr = curr.next;
    prev.next = prevToPrev;
    prevToPrev = prev;
  }
  head = prev;
  return head;
}

function reverseListRec(head: ListNode | null): ListNode | null {
  // base case
  if (!head || !head.next) return head;
  // main case
  let node = reverseListRec(head.next);
  head.next.next = head;
  head.next = null;
  return node;
}
