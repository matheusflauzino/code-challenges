import { test } from 'node:test';
import { strict as assert } from 'node:assert';

Array.prototype.last = function () {
    if (!this.length) return -1;
    return this[this.length - 1];
};




test('should return 3 if array is [1,2,3]', () => {
    assert.deepEqual(3, [1,2,3].last());
})

test('should return 3 if array is [0,0,0]', () => {
    assert.deepEqual(0, [0,0,0].last());
})

test('should return 3 if array is []', () => {
    assert.deepEqual(-1, [].last());
})