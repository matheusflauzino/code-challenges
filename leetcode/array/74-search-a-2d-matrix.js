function searchMatrix(matrix, target) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    let left = 0;
    let right = rows * cols - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const midValue = matrix[Math.floor(mid / cols)][mid % cols];

        if (midValue === target) {
            return true;
        } else if (midValue < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return false;
}


const matrix1 = [[1,3,5,7],[10,11,16,20],[23,30,34,60]];
console.log(searchMatrix(matrix1, 3)); // true

const matrix2 = [[1,3,5,7],[10,11,16,20],[23,30,34,60]];
console.log(searchMatrix(matrix2, 13)); // false

const matrix3 = [[1,3,5],[7,9,11],[13,15,17],[19,21,23]];
console.log(searchMatrix(matrix3, 19)); // true

const matrix4 = [[1,3,5],[7,9,11],[13,15,17],[19,21,23]];
console.log(searchMatrix(matrix4, 22)); // false
