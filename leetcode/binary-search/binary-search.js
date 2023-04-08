/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const middle = Math.floor((left+right)/2)

        if(nums[middle] === target) {
            return middle;
        } else if (nums[middle] < target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    return -1;
};

console.log(search( [-1,0,3,5,9,12], 9))
console.log(search( [-1,0,3,5,9,12], 12))
console.log(search( [-1,0,3,5,9,12], 0))

/**
 * 
A busca binária é um algoritmo de busca que utiliza a divisão e conquista para encontrar um valor específico em um conjunto ordenado de elementos.

O algoritmo funciona da seguinte maneira:

1) Comparar o valor procurado com o valor do elemento central do conjunto.
2) Se o valor procurado for igual ao valor do elemento central, a busca é concluída.
3) Se o valor procurado for menor que o valor do elemento central, a busca continua na metade inferior do conjunto.
4) Se o valor procurado for maior que o valor do elemento central, a busca continua na metade superior do conjunto.
5) Repetir os passos 1 a 4 até que o valor seja encontrado ou até que não haja mais elementos para buscar.

A principal vantagem da busca binária é que ela tem uma complexidade de tempo de O(log n), onde n é o número de 
elementos no conjunto. Isso significa que a busca é muito mais rápida do que a busca linear, que tem complexidade de tempo O(n), especialmente para conjuntos grandes.

Porém, a busca binária exige que o conjunto esteja ordenado, o que pode ser uma desvantagem em alguns casos. 
Além disso, a implementação da busca binária pode ser mais complicada do que a implementação da busca linear, especialmente para iniciantes em programação.
 */