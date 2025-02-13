class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val: number) {
    this.val = val;
    this.next = null;
  }
}

function middleNode(head: ListNode | null): ListNode | null {
  let fast = head;
  let slow = head;
  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast!.next!.next;
  }
  return slow;
}
