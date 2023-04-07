
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
var middleNode = function(head) {

    let twice = head;
    let once = head;
    while(twice && twice.next) {
        twice = twice.next.next;
        once = once.next;
    }

    return once;
    
};
const list1 = new ListNode(1, new ListNode(2, new ListNode(new ListNode(3, new ListNode(new ListNode(4))))))
const list2 = new ListNode(1, new ListNode(2, new ListNode(new ListNode(3, new ListNode(new ListNode(new ListNode(4, new ListNode(new ListNode(5)))))))))

console.log(JSON.stringify(middleNode(list1)));
console.log(JSON.stringify(middleNode(list2)));