/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    const freq = {};

    // Contabiliza a frequência de cada letra na string
    for (let i = 0; i < s.length; i++) {
        freq[s[i]] = freq[s[i]] + 1 || 1;
    }

    // Percorre a string novamente para encontrar a primeira letra com frequência 1
    for (let i = 0; i < s.length; i++) {
        if (freq[s[i]] === 1) {
            return i;
        }
    }

    return -1;
};

const s1 = "leetcode";
console.log(firstUniqChar(s1)); // Output: 0

const s2 = "loveleetcode";
console.log(firstUniqChar(s2)); // Output: 2

const s3 = "aabb";
console.log(firstUniqChar(s3)); // Output: -1