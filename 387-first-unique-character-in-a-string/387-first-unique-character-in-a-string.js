/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    if (s.length == 1) {
        return 0;
    }
    const n = s.length;
    let charFrequency = {},
        left = 0;
    
    for (let right = 0; right < n; right++) {
        if (!(s[right] in charFrequency)) {
            charFrequency[s[right]] = 0;
        }
        charFrequency[s[right]] += 1;
        if (charFrequency[s[right]] > 1) {
            while (left < n && charFrequency[s[left]] > 1) {
                left += 1;
            }
            if (left === n) {
                return -1;
            }
        }
    }
    return left;
};