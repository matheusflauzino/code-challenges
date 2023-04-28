/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if(numRows === 0) return [];
    const pascal = [[1]];

    for(let i = 1; i < numRows; i++) {
        pascal[i] = [1];
        for(let j = 1; j < i; j++) {
            pascal[i][j] = pascal[i-1][j-1] + pascal[i-1][j];
        }
        pascal[i].push(1);
    }
    return pascal;
};

console.log(generate(5))