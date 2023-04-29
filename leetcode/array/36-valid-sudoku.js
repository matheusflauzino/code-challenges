/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    const n = 9;
    const rows = new Array(n).fill().map(() => new Set());
    const cols = new Array(n).fill().map(() => new Set());
    const boxes = new Array(n).fill().map(() => new Set());

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const num = board[i][j];
            if (num === '.') continue;

            const boxIndex = 3 * Math.floor(i / 3) + Math.floor(j / 3);

            if (rows[i].has(num) || cols[j].has(num) || boxes[boxIndex].has(num)) {
                return false;
            }

            rows[i].add(num);
            cols[j].add(num);
            boxes[boxIndex].add(num);
        }
    }

    return true;
};

const board1 = [
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9']
];
console.log(isValidSudoku(board1)); // true

const board2 = [["8", "3", ".", ".", "7", ".", ".", ".", "."]
    , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
    , [".", "9", "8", ".", ".", ".", ".", "6", "."]
    , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
    , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
    , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
    , [".", "6", ".", ".", ".", ".", "2", "8", "."]
    , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
    , [".", ".", ".", ".", "8", ".", ".", "7", "9"]]

console.log(isValidSudoku(board2)); // false
