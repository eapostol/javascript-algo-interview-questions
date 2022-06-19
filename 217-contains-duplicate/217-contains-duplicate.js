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
        }
        numFrequency[num] = 1;
    }
    return false;
};