/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    const charCount = {};

    for (let i = 0; i < magazine.length; i++) {
        charCount[magazine[i]] = (charCount[magazine[i]] || 0) + 1;
    }

    for (let i = 0; i < ransomNote.length; i++) {
        if (!charCount[ransomNote[i]] || charCount[ransomNote[i]] === 0) {
            return false;
        }
        charCount[ransomNote[i]]--;
    }

    return true;
};

console.log(canConstruct("a", "b")); // false
console.log(canConstruct("aa", "ab")); // false
console.log(canConstruct("aa", "aab")); // true