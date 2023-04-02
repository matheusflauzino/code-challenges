import { test } from 'node:test';
import { strict as assert } from 'node:assert';
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {

    if(needle.length === 0) return 0;
    for(let i = 0; i < haystack.length; i++) {
        if(haystack.charAt(i) === needle.charAt(0)) {
            if(needle.length + i > haystack.length) {
                return -1;
            } else if (haystack.substring(i,needle.length+i) === needle) return i;
        }
    }
    return -1;
};

console.log(strStr("sadbutsad","sad"))


/*

test('should return 0 if haystack = "sadbutsad", needle = "sad"', () => {
    assert.deepEqual(3,strStr("sadbutsad","sad"));
})

*/