// 1st method(approach)
function getIntersectionNode1(
  headA: ListNode | null,
  headB: ListNode | null,
): ListNode | null {
  const getLength = (head: ListNode | null): number => {
    let len = 0;
    let curr = head;
    while (curr) {
      curr = curr.next;
      len++;
    }
    return len;
  };

  // start and check for the pointer to reach to a node at same time.
  const getIntersectionNode = (
    head1: ListNode | null,
    head2: ListNode | null,
  ): ListNode | null => {
    while (head1 && head2) {
      if (head1 === head2) return head1;
      head1 = head1.next;
      head2 = head2.next;
    }
    return null;
  };

  // Get the length of both lists
  const l1 = getLength(headA);
  const l2 = getLength(headB);
  const delta = Math.abs(l1 - l2);
  let ptr1: ListNode = headA!;
  let ptr2: ListNode = headB!;
  if (delta !== 0) {
    for (let i = 1; i <= delta; i++) {
      // whichever list's length is larger, move the pointer to delta.
      if (l1 > l2) ptr1 = ptr1.next!;
      else ptr2 = ptr2.next!;
    }
  }
  return getIntersectionNode(ptr1, ptr2);
}

// Approach 2
function getIntersectionNode2(
  headA: ListNode | null,
  headB: ListNode | null,
): ListNode | null {
  // boundary check
  if (!headA || !headB) return null;
  let n1: ListNode | null = headA,
    n2: ListNode | null = headB;
  while (n1 !== n2) {
    n1 = n1 ? n1.next : headB;
    n2 = n2 ? n2.next : headA;
  }
  return n1;
}
