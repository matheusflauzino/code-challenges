
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

var reverseList = function(head) {
    let prev = null;
    let current = head;
    let next = null;
   
    while(current) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
};
const list1 = new ListNode(1, new ListNode(2, new ListNode(3,new ListNode(4))))
console.log(reverseList(list1));