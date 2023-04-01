import { test } from 'node:test';
import { strict as assert } from 'node:assert';
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let temp = 0;
    let sqrt = x / 2;

    while(sqrt != temp) {
        temp = sqrt;
        sqrt = (x/temp + temp) / 2;
    }

    return parseInt(sqrt);
};




test('should return 2 if input is 4', () => {
    assert.deepEqual(2,mySqrt(4));
})

test('should return 2 if input is 8', () => {
    assert.deepEqual(2,mySqrt(8));
})

test('should return 3 if input is 9', () => {
    assert.deepEqual(3,mySqrt(9));
})

