/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    if (s.length == 1) {
        return 0;
    }
    let charFrequency = {};
    
    for (let i = 0; i < s.length; i++) {
        if (!(s[i] in charFrequency)) {
            charFrequency[s[i]] = 0;
        }
        charFrequency[s[i]] += 1;
    }
    
    for (let i = 0; i < s.length; i++) {
        if (charFrequency[s[i]] == 1) {
            return i;
        }
    }
    return -1;
};