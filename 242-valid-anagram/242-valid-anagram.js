/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let chars = new Map();
    
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        let count = chars.has(char) ? chars.get(char) : 0;
        chars.set(char, count + 1);
    }
    
    for (let j = 0; j < t.length; j++) {
        const char = t[j];
        if (!chars.has(char)) {
            return false;
        } else {
            let count = chars.get(char) - 1;
            if (count < 1) {
                chars.delete(char);
            } else {
                chars.set(char, count);
            }
        }
    }
    if (chars.size > 0) {
        return false;
    } else {
        return true;
    }
};