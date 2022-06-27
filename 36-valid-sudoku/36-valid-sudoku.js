/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let seen = new Set();
    
    for (let i = 0; i < 9; i++) {
        let row = new Set(),
            col = new Set(),
            box = new Set(),
            rowVal = 0,
            colVal = 0,
            boxVal = 0;
        for (let j = 0; j < 9; j++) {
            rolVal = board[i][j];
            colVal = board[j][i];
            
            const boxRow = (3 * Math.floor(i / 3)) + Math.floor(j / 3);
            const boxCol = (3 * (i % 3)) + (j % 3);
            boxVal = board[boxRow][boxCol];
            
            if (rolVal !== '.') {
                if (row.has(rolVal)) {
                    return false;
                } else {
                    row.add(rolVal);
                }   
            }
            
            if (colVal !== '.') {
                if (col.has(colVal)) {
                    return false;
                } else {
                    col.add(colVal);
                }   
            }
            
            if (boxVal !== '.') {
                if (box.has(boxVal)) {
                    return false;
                } else {
                    box.add(boxVal);
                }
            }
        }
    }
    return true;
};