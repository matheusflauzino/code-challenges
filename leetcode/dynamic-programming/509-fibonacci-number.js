import { test } from 'node:test';
import { strict as assert } from 'node:assert';

/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n, memory = {}) {
    if(n in memory) return memory[n];
    if(n == 0) return 0;
    if(n <= 2) return 1;
    
    memory[n] =  fib(n-1,memory) + fib(n-2,memory);
    return memory[n];
};

test('should return 55 if number is 6', () => {
    assert.deepEqual(55, fib(10));
})

test('should return 0 if number is 0', () => {
    assert.deepEqual(0, fib(0));
})

test('should return 1 if number is 1', () => {
    assert.deepEqual(1, fib(1));
})

test('should return 2 if number is 1', () => {
    assert.deepEqual(1, fib(2));
})

test('should return 8 if number is 6', () => {
    assert.deepEqual(8, fib(6));
})

