import { test } from 'node:test';
import { strict as assert } from 'node:assert';
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let smallest = strs[0].length;
    for (const str of strs) {
        if (str.length < smallest) smallest = str.length;
    }

    let commons = []
    for (let i = 0; i < smallest; i++) {
        let common = true;
        const c = strs[0][i];
        for (const word of strs) {
            if (word[i] != c) {
                common = false;
                break;
            }
        }
        if (common) commons.push(c);
        else break;
    }

    return commons.join("");
};


test('should return "fl" if input is ["flower","flow","flight"]', () => {
    assert.deepEqual("fl", longestCommonPrefix(["flower", "flow", "flight"]));
})

test('should return "" if input is ["dog","racecar","car"]', () => {
    assert.deepEqual("", longestCommonPrefix(["dog", "racecar", "car"]));
})

test('should return "c" if input is ["cir","car"]', () => {
    assert.deepEqual("c", longestCommonPrefix(["cir","car"]));
})

