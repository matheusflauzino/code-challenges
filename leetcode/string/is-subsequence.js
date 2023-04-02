import { test } from 'node:test';
import { strict as assert } from 'node:assert';
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
   
    let j = 0;
    let i = 0;
    while(j < t.length) {
        if(s[i] === t[j]) {
            i++;
            j++;
        } else {
            j++;
        }
    }

    if(i === s.length) return true;
    return false;   
};

/**
 * i and j have to go all the way together 
 */



test('should return true if s = "abc" and t = "ahbgdc"', () => {
    assert.deepEqual(true,isSubsequence("abc","ahbgdc"))
});

test('should return false if s = "axc" and t = "ahbgdc"', () => {
    assert.deepEqual(false,isSubsequence("axc","ahbgdc"))
});

test('should return false if s = "acb" and t = "ahbgdc"', () => {
    assert.deepEqual(false,isSubsequence("acb","ahbgdc"))
});

test('should return false if s = "bb" and t = "ahbgdc"', () => {
    assert.deepEqual(false,isSubsequence("bb","ahbgdc"))
});

