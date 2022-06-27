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
    
    const result = [];
    let index = 0;
    
    const flatArray = flattenArray(mat);
    for (let i = 0; i < r; i++) {
        result[i] = [];
        for (let j = 0; j < c; j++) {
            result[i][j] = flatArray[index];
            index += 1;
        }
    }
    return result;
};

function flattenArray(arr, flattenedArray = []) {
    
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] == 'object') {
            flattenArray(arr[i], flattenedArray);
        } else {
            flattenedArray.push(arr[i]);
        }
    }
    return flattenedArray;
}