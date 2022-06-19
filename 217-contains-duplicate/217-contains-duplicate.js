/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let numFrequency = {};
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (num in numFrequency) {
            return true;
        } else {
            numFrequency[num] = 0;            
        }
        numFrequency[num] += 1;
        
        if (numFrequency[num] > 1) {
            return true;
        }
    }
    return false;
};