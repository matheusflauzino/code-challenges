import { test } from 'node:test';
import { strict as assert } from 'node:assert';

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let map = {}
    let length = 0;
    let hasOddFrequency = false;

    for(let i = 0; i < s.length; i++) {
        const char = s.charAt(i);
        map[char] = (map[char] || 0) + 1;
    }

    for(let key in map) {
        const frequency = map[key];
        if(frequency%2 === 0) {
            length += frequency;
        } else {
            length += frequency -1;
            hasOddFrequency = true;
        }
    }

    if(hasOddFrequency) length++;

    return length;
};


test('should return 7 if input is abccccdd', () => {
    assert.deepEqual(7, longestPalindrome('abccccdd'));
})

test('should return 3 if input is aab', () => {
    assert.deepEqual(3, longestPalindrome('aab'));
})

test('should return 2 if input is aab', () => {
    assert.deepEqual(2, longestPalindrome('aa'));
})

test('should return 4 if input is aab', () => {
    assert.deepEqual(4, longestPalindrome('aaaa'));
})

test('should return 1 if input is aab', () => {
    assert.deepEqual(1, longestPalindrome('ab'));
})

test('should return 1 if input is aab', () => {
    assert.deepEqual(1, longestPalindrome('Aa'));
})

