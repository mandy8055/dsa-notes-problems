function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let ans = new ListNode(-1);
  ans.next = head;
  let c1: ListNode | null = ans;
  let c2: ListNode | null = ans;
  for (let i = 1; i <= n; i++) {
    c1 = c1.next;
  }
  while (c1.next) {
    c1 = c1.next;
    c2 = c2.next;
  }
  c2.next = c2.next.next;
  return ans.next;
}
