/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let charFrequency = new Map();
    
    for (let i = 0; i < magazine.length; i++) {
        const val = magazine[i];
        let count = charFrequency.has(val) ? charFrequency.get(val) : 0;
        charFrequency.set(val,  count + 1);
    }
    
    for (let j = 0; j < ransomNote.length; j++) {
        const val = ransomNote[j];
        if (!charFrequency.has(val) || charFrequency.get(val) < 1) {
            return false;
        } else {
            let count = charFrequency.get(val);
            charFrequency.set(val,  count - 1);
        }
    }
    return true;
};