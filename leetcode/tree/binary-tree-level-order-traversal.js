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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return [];

    const result = [];
    const queue = [root];

    while (queue.length > 0) {
        const levelSize = queue.length;
        const currentLevel = []

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            currentLevel.push(node.val);

            if(node.left) {
                queue.push(node.left)
            }

            if(node.right) {
                queue.push(node.right);
            }
        }

        result.push(currentLevel);
    }

    return result;  
};

/**

      3
     / \
    9   20
        / \
       15  7
 */

const root = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
console.log(levelOrder(root))


/**

      3
     / \
    9   20
        / \
       15  7
 */
const root2 = new TreeNode(1, new TreeNode(2,new TreeNode(4), new TreeNode(5)), new TreeNode(3, new TreeNode(6), new TreeNode(7)));
console.log(levelOrder(root2))