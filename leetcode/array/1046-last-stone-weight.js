/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = (stones) => {
  while (stones.length > 1) {
    stones.sort((a, b) => b - a); // classifica as pedras em ordem decrescente
    const stone1 = stones[0];
    const stone2 = stones[1];
    stones.splice(0, 2); // remove as duas pedras mais pesadas
    if (stone1 !== stone2) {
      stones.push(stone1 - stone2); // adiciona a pedra resultante, se houver
    }
  }
  return stones.length > 0 ? stones[0] : 0; // retorna o peso da última pedra ou 0, se não houver nenhuma
}


console.log(lastStoneWeight([2, 7, 4, 1, 8, 1])); // Output: 1
console.log(lastStoneWeight([1])); // Output: 1