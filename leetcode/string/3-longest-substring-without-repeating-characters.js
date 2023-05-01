/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const map = new Map();
    let left = 0;
    let right = 0;

    let maxSize = 0;
    while(right < s.length) {
        if(!map.has(s[right])) {
            map.set(s[right],1)
            right++;
            maxSize = Math.max(map.size, maxSize);
        } else {
            map.delete(s[left++])
        }
    }
    return maxSize;
};

console.assert(lengthOfLongestSubstring('aba') === 2, 'it should return 2 if input aba')
console.assert(lengthOfLongestSubstring('bbbbb') === 1, 'it should return 1 if input bbbbb')
console.assert(lengthOfLongestSubstring('pwwkew') === 3, 'it should return 3 if input pwwkew')
console.assert(lengthOfLongestSubstring('abcabcbb') === 3, 'it should return 3 if input abcabcbb')