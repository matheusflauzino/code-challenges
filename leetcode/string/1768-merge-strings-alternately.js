/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let left = 0;
  let right = 0;
  let result = [];
  while (left < word1.length || right < word2.length) {
    if (left < word1.length) result.push(word1[left]);
    if (right < word2.length) result.push(word2[right]);
    left++;
    right++;
  }

  return result.join("");
};

console.log(mergeAlternately("abc", "pqr")); //apbqcr
console.log(mergeAlternately("ab", "pqrs"));
