import { test } from 'node:test';
import { strict as assert } from 'node:assert';

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const splitInput = s.split("");
    let sum = 0;
    for (let i = 0; i < splitInput.length; i++) {
        switch (splitInput[i]) {
            case 'I':
                if(splitInput[i+1] === 'V') {
                    sum += 4;
                    i++
                } else if(splitInput[i+1] === 'X') {
                    sum += 9;
                    i++
                } else sum += 1;
                break;
            case 'V':
                sum += 5;
                break;
            case 'X':
                if(splitInput[i+1] === 'L') {
                    sum += 40;
                    i++
                } else if(splitInput[i+1] === 'C') {
                    sum += 90;
                    i++
                } else sum += 10;
                break;
            case 'L':
                sum += 50;
                break;
            case 'C':
                if(splitInput[i+1] === 'D') {
                    sum += 400;
                    i++
                } else if(splitInput[i+1] === 'M') {
                    sum += 900;
                    i++
                } else sum += 100;
                break;
            case 'D':
                sum += 500;
                break;
            case 'M':
                sum += 1000;
                break;
        }

    }
    return sum;
};


test('should return 6 if input is VI', () => {
    assert.deepEqual(6, romanToInt("VI"));
})

test('should return 4 if input is IV', () => {
    assert.deepEqual(4, romanToInt("IV"));
})

test('should return 3 if input is III', () => {
    assert.deepEqual(3, romanToInt("III"));
})


test('should return 58 if input is LVIII', () => {
    assert.deepEqual(58, romanToInt("LVIII"));
})

test('should return true if input is MCMXCIV', () => {
    assert.deepEqual(1994, romanToInt("MCMXCIV"));
})  
