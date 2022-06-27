/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const result = [];
    
    for (let i = 0; i < numRows; i++) {
        const row = [1];
        if (i > 0) {
            let prevCol = result[i - 1].length;
            if (prevCol > 1) {
                for (let j = 0; j < prevCol; j++) {
                    const left = result[i - 1][j];
                    const right = result[i - 1][j + 1];
                    if (left && right) {
                        const sum = left + right;
                        row.push(sum);   
                    }
                }
            }
            row.push(1);
        }
        result.push(row);
    }
    return result;
};