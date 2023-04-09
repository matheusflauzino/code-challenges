import { test } from 'node:test';
import { strict as assert } from 'node:assert';

/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function(s) {
    const freqMap = new Map();
    const freqSet = new Set();
    
    // Conta a frequência de cada caractere
    for (let i = 0; i < s.length; i++) {
        freqMap.set(s[i], (freqMap.get(s[i]) || 0) + 1);
    }

    console.log(freqMap);
    
    let deletions = 0;
    for (let [char, freq] of freqMap) {
        console.log('freq',freq)
        // Se a frequência já existe, decrementa até encontrar uma frequência única
        while (freqSet.has(freq)) {
            freq--;
            deletions++;
        }
        if (freq > 0) {
            freqSet.add(freq);
        }
    }
    
    return deletions;
};



test('should return 0 if input is aab', () => {
    assert.deepEqual(0, minDeletions('aab'));
})

test('should return 2 if input is aaabbbcc', () => {
    assert.deepEqual(2, minDeletions('aaabbbcc'));
})

test('should return 2 if input is aaabbbcc', () => {
    assert.deepEqual(2, minDeletions('ceabaacb'));
})

test('should return 1 if input is accdcdadddbaadbc', () => {
    assert.deepEqual(1, minDeletions('accdcdadddbaadbc'));
})
