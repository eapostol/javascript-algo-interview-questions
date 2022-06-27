/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let charFrequency = {};
    
    for (let i = 0; i < magazine.length; i++) {
        if (!(magazine[i] in charFrequency)) {
            charFrequency[magazine[i]] = 0;
        }
        charFrequency[magazine[i]] += 1;
    }
    
    for (let j = 0; j < ransomNote.length; j++) {
        if (ransomNote[j] in charFrequency) {
            charFrequency[ransomNote[j]] -= 1;
            if (charFrequency[ransomNote[j]] === 0) {
                delete charFrequency[ransomNote[j]];
            }
        } else {
            return false;
        }
    }
    return true;
};