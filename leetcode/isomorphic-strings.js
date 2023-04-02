import { test } from 'node:test';
import { strict as assert } from 'node:assert';
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isIsomorphic = function (s, t) {
    let mapS = Array(256).fill(0)
    let mapT = Array(256).fill(0)

    for (let i = 0; i < s.length; i++) {
        if (mapS[s.charCodeAt(i)] != mapT[t.charCodeAt(i)]) {
            return false;
        }
        mapS[s.charCodeAt(i)] = i + 1;
        mapT[t.charCodeAt(i)] = i + 1;
    }
    return true;
};


test('should return true if s = "egg", t = "add"', () => {
    assert.deepEqual(true, isIsomorphic("egg", "add"));
})

test('should return false if s = "foo", t = "bar"', () => {
    assert.deepEqual(false, isIsomorphic("foo", "bar"));
})

test('should return true if s = "paper", t = "title"', () => {
    assert.deepEqual(true, isIsomorphic("paper", "title"));
})

test('should return true if s = "bbbaaaba", t = "aaabbbba"', () => {
    assert.deepEqual(false, isIsomorphic("bbbaaaba", "aaabbbba"));
})