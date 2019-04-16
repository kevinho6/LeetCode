// Time Complexity - O(n)
// Space Complexity - O(1)

var reverseList = function(head) {
  if (head === null) {
    return head;
  }

  let prev = null;
  let curr = head;
  let next = curr.next;

  while (curr !== null) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
};
