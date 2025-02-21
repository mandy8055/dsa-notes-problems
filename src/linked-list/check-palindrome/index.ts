// T.C: O(n), S.C: O(n) stack space
function isPalindromeRec(head: ListNode | null): boolean {
  let left = head;
  const recurse = (right: ListNode | null): boolean => {
    // base case
    if (!right) return true;
    // main case
    const check = recurse(right.next) && left!.val === right.val;
    left = left!.next;
    return check;
  };
  return recurse(head);
}

function isPalindrome(head: ListNode | null): boolean {
  // Find middle of the linked list(Tortoise-hare) O(n)
  // Reverse slow.next = O(n). Stop at fast.next.next === null or fast.next === null
  // Compare O(n / 2) = O(n)
  // Reverse back to bring back the LL in original form(optional)
  throw 'Implementation is easy';
}
