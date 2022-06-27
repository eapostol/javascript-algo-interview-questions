/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const m = matrix.length;
    const n = matrix[0].length;
    
    let row = 0,
        col = n - 1;
    
    while (row < m && col > -1) {
        const current = matrix[row][col];
        if (current === target) {
            return true;
        } else if (current > target) {
            col -= 1;
        } else if (current < target) {
            row += 1;
        }
    }
    return false;
};