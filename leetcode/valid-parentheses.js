import { test } from 'node:test';
import { strict as assert } from 'node:assert';
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = [];
    let top = "";

    for (let c of s) {
        if(stack.length > 0) {
            top = stack[stack.length-1];
        }
        if(c === "(" || c === "[" || c === "{") {
            stack.push(c);
        } else if (c === ")" && stack.length > 0 && stack[stack.length - 1] === "(") {
            stack.pop();
        } else if (c === "}" && stack.length > 0 && stack[stack.length - 1] === "{") {
            stack.pop();
        } else if (c === "]" && stack.length > 0 && stack[stack.length - 1] === "[") {
            stack.pop();
        } else return false;
    }

    return stack.length === 0;
};



test('should return true if input is "()"', () => {
    assert.deepEqual(true, isValid("()"));
})

test('should return true if input is  "()[]{}"', () => {
    assert.deepEqual(true, isValid("()[]{}"));
})

test('should return false if input is  "(]"', () => {
    assert.deepEqual(false, isValid("(]"));
})

test('should return false if input is "([)]"', () => {
    assert.deepEqual(false, isValid("([)]"));
})

test('should return false if input is "{[]}"', () => {
    assert.deepEqual(true, isValid("{[]}"));
}) 

