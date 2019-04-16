// Time Complexity - O(n)
// Space Complexity - O(1)

var hasCycle = function(head) {
  if (head === null) {
    return false;
  }
  let slowPointer = head;
  let fastPointer = head.next;
  while (fastPointer !== null) {
    if (slowPointer === fastPointer) {
      return true;
    }
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next;
    if (fastPointer === null) {
      return false;
    }
    fastPointer = fastPointer.next;
  }
  return false;
};
