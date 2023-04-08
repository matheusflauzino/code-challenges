
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}


/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    let once = head;
    let twice = head;
    while (twice && twice.next) {
        once = once.next;
        twice = twice.next.next;
        if (once === twice) {
            let ptr = head;
            while (ptr !== once) {
                ptr = ptr.next;
                once = once.next;
            }
            return ptr;
        }
    }
    return null;
};


// Create the linked list: 3 -> 2 -> 0 -> -4 -> 2 (cycle)
let head = new ListNode(3);
head.next = new ListNode(2);
head.next.next = new ListNode(0);
head.next.next.next = new ListNode(-4);
head.next.next.next.next = head.next; // The cycle connects back to the second node

// Detect the starting point of the cycle
let cycleStart = detectCycle(head);

// Print the result
console.log('cycleStart', cycleStart);


if (cycleStart) {
    console.log(`Cycle detected at node with value ${cycleStart.val}`);
} else {
    console.log('No cycle detected');
}