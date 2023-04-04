
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

const mergeTwoLists = function (l1, l2) {
    let tempNode = new ListNode(0, null);
    let currentNode = tempNode;

    while (l1 && l2) {
        if (l1.val < l2.val) {
            currentNode.next = l1;
            l1 = l1.next
        } else {
            currentNode.next = l2;
            l2 = l2.next
        }
        currentNode = currentNode.next;
    }
    currentNode.next = l1 || l2;

    return tempNode.next;
};

const list1 = new ListNode(1, new ListNode(2, new ListNode(4)))
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)))

console.log(JSON.stringify(mergeTwoLists(list1, list2)));