
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (!root || root === p || root === q) {
        return root;
    }
    if ((p.val < root.val && q.val > root.val) || (q.val < root.val && p.val > root.val)) {
        return root;
    }
    if (p.val < root.val && q.val < root.val) {
        return lowestCommonAncestor(root.left, p, q);
    }
    return lowestCommonAncestor(root.right, p, q);
};