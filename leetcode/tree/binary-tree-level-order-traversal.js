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

/**
Para realizar a travessia em ordem de nível de uma árvore binária, podemos usar o algoritmo Breadth First Search (BFS). 
Começamos adicionando o nó raiz em uma fila, e enquanto a fila não estiver vazia, retiramos o primeiro elemento da fila, 
adicionamos seu valor à lista do nível atual e adicionamos seus filhos esquerdo e direito (se houver) à fila.

Podemos repetir esse processo até que a fila esteja vazia, o que significa que percorremos todos os nós da árvore binária.

Neste código, primeiro verificamos se o nó raiz existe. Se não existir, retornamos uma lista vazia, pois não há nós para percorrer.

Em seguida, criamos uma lista vazia chamada result para armazenar o resultado da travessia em ordem de nível e um objeto deque 
chamado queue para armazenar os nós da árvore binária que queremos percorrer.

Então, entramos em um loop enquanto a fila não estiver vazia. Dentro do loop, obtemos o tamanho do nível atual 
obtendo o comprimento da fila no início do loop. Em seguida, criamos uma lista vazia chamada current_level para armazenar os valores dos nós no nível atual.

Em seguida, percorremos o número de nós no nível atual, que é igual a level_size. Em cada iteração desse loop, 
obtemos o primeiro nó na fila usando popleft(), adicionamos seu valor à lista current_level e adicionamos seus filhos esquerdo e direito (se houver) à fila.

Depois de percorrer todos os nós no nível atual, adicionamos a lista current_level à lista result. 
Repetimos esse processo até que a fila esteja vazia, momento em que retornamos a lista result contendo a travessia em ordem de nível da árvore binária.
 */