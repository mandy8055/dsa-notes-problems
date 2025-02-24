function oddEvenList(head: ListNode | null): ListNode | null {
  let oddHead: ListNode | null = null;
  let oddTail: ListNode | null = null;
  let evenHead: ListNode | null = null;
  let evenTail: ListNode | null = null;
  let idx = 1;
  let curr = head;
  let prev: ListNode | null = null;
  // edge case
  if (!head || !head.next) return head;
  while (curr) {
    if (idx % 2 === 0) {
      // even index
      if (!evenHead) {
        evenHead = evenTail = curr;
      } else {
        evenTail!.next = curr;
        evenTail = curr;
      }
    } else {
      // Odd index
      if (!oddHead) {
        oddHead = oddTail = curr;
      } else {
        oddTail!.next = curr;
        oddTail = curr;
      }
    }
    prev = curr;
    curr = curr.next;
    prev.next = null; // to break the cycle
    idx++;
  }
  oddTail!.next = evenHead;
  head = oddHead;
  return head;
}
