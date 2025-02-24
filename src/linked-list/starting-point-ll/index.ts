function detectCycle(head: ListNode | null): ListNode | null {
  /* Algo
        1. Find if LL has a cycle
        2. If yes, store the take node of the nodes from where they meet.
        3. If no, return null
        4. Take either of slow or fast and re-initialize with head.
        5. start moving one node at a time using both. The place where they will meet will the starting point. Why? Maths
        */
  const hasCycle = (node: ListNode | null): ListNode | null => {
    let slow = node;
    let fast = node;
    while (fast && fast.next) {
      slow = slow!.next;
      fast = fast.next.next;
      if (slow === fast) {
        // cycle found
        break;
      }
    }
    if (!fast || !fast.next) {
      return null;
    }
    return slow;
  };
  let n1 = hasCycle(head);
  let n2 = head;
  if (!n1) return n1;

  while (n1 !== n2) {
    n1 = n1!.next;
    n2 = n2!.next;
  }

  return n1;
}
