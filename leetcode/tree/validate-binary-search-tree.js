//Definition for a binary tree node.
class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root, min=null, max=null) {
    if (!root) return true;
    if (min && root.val <= min.val) return false;
    if (max && root.val >= max.val) return false;
    return isValidBST(root.left, min, root) && isValidBST(root.right, root, max);
};

const t1 = new TreeNode(2,1,3);
const t2 = new TreeNode(5,1,new TreeNode(4,3,6))

console.log(isValidBST(t1));
console.log(isValidBST(t2));