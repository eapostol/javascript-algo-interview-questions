/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const m = matrix.length;
    const n = matrix[0].length;
    const flatArray = flattenArray(matrix);
    
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
    
    const found = binarySearch(flatArray, target, 0, flatArray.length);
    if (found) {
        return true;
    } else {
        return false;
    }
};

function binarySearch(arr, target, start = 0, end = 0) {
    
    while (start <= end) {
        const middle = Math.floor(start + (end - start) / 2);
        
        if (target == arr[middle]) {
            return true;
        } else if (target > arr[middle]) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }
    return false;
}

function flattenArray(arr, flattenedArr = []) {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'object') {
            flattenArray(arr[i], flattenedArr);
        } else {
            flattenedArr.push(arr[i]);
        }
    }
    return flattenedArr;
}