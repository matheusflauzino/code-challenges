/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

class Node {
    constructor(val, children) {
      this.val = val;
      this.children = children;
    }
  }
  
  const preorder = function(root) {
    if (!root) return [];
    
    const stack = [root];
    const result = [];
  
    while (stack.length) {
      const node = stack.pop();
      result.push(node.val);
  
      if (node.children) {
        for (let i = node.children.length - 1; i >= 0; i--) {
          stack.push(node.children[i]);
        }
      }
    }
  
    return result;
  };


  /**
   
                    1
        3           2       3
    5       6 
   */
  const tree = new Node(1, [
    new Node(3, [new Node(5), new Node(6)]),
    new Node(2),
    new Node(4),
  ]);
  console.log(preorder(tree)); // Output: [1, 3, 5, 6, 2, 4]