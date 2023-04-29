/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    const m = mat.length;
    const n = mat[0].length;
    if (m * n !== r * c) {
      // Se não for possível fazer a operação, retorna a matriz original.
      return mat;
    }
    const result = new Array(r);
    let row = 0;
    let col = 0;
    for (let i = 0; i < r; i++) {
      result[i] = new Array(c);
      for (let j = 0; j < c; j++) {
        result[i][j] = mat[row][col];
        col++;
        if (col === n) {
          row++;
          col = 0;
        }
      }
    }
    return result;
};

const mat = [[1, 2], [3, 4]];
const r = 1;
const c = 4;
const result = matrixReshape(mat, r, c);
console.log(result); // Output: [[1, 2, 3, 4]]