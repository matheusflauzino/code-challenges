import { test } from 'node:test';
import { strict as assert } from 'node:assert';
/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function(start, goal) {
  const xor = (start^goal).toString(2);
  let lenght = 0;
  for(const c of xor) {
    if(c === '1') {
        lenght++;
    }
  }
   return lenght;
};


test('should return 3 if start = 10 and goal = 7', () => {
    assert.deepEqual(3,minBitFlips(10,7));
})