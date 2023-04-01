import { test } from 'node:test';
import { strict as assert } from 'node:assert';
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const phrase = s.replace(/[^\w]|[_]/g, "").toLocaleLowerCase();
    const palindrome = phrase.split("").reverse().join("");
    return phrase === palindrome;
};


test('should return true if input is "A man, a plan, a canal: Panama"', () => {
    assert.deepEqual(true, isPalindrome("A man, a plan, a canal: Panama"));
})

test('should return false if input is "race a car"', () => {
    assert.deepEqual(false, isPalindrome("race a car"));
})

test('should return true if input is " "', () => {
    assert.deepEqual(true, isPalindrome(" "));
})

test('should return true if input is "ab_a"', () => {
    assert.deepEqual(true, isPalindrome("ab_a"));
})

test('should return true if input is "Marge, let\'s \"[went].\" I await {news} telegram."', () => {
    assert.deepEqual(true, isPalindrome("Marge, let's \"[went].\" I await {news} telegram."));
})



