/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let char = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(') {
            char.push(')');
        } else if (s[i] == '{') {
            char.push('}');
        } else if (s[i] == '[') {
            char.push(']');
        } else if (char.length == 0 || char.pop() != s[i]) {
            return false;
        }
        
    }
    return char.length == 0;
};