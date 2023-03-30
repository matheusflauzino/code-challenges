import { test } from 'node:test';
import { strict as assert } from 'node:assert';
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const words = s.split(" ");
    let word = words.pop();
    while(word.length<1) {
        word = words.pop();
    }
    return word.length;
};

test('should return 5 if input is "Hello World"', () => {
    assert.deepEqual(5, lengthOfLastWord("Hello World"));
})

test('should return 4 if input is "   fly me   to   the moon  "', () => {
    assert.deepEqual(4, lengthOfLastWord("   fly me   to   the moon  "));
})


test('should return 6 if input is "luffy is still joyboy"', () => {
    assert.deepEqual(6, lengthOfLastWord("luffy is still joyboy"));
})