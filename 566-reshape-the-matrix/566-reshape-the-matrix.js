/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    const m = mat[0].length;
    const n = mat.length;
    if (r * c !== m * n) {
        return mat;
    }
    
    const result = [[]];
    
    for (let i = 0; i < r * c; i++) {
        const row = Math.floor(i / c);
        if (!result[row]) {
            result[row] = [];
        }
        result[row][i % c] = mat[Math.floor(i / m)][i % m];
    }
    return result;
};