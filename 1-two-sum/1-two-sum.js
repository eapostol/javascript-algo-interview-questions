/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numsHash = {};
    const n = nums.length;

    for (let i = 0; i < n; i++) {
        const num = nums[i];
        
        if (target - num in numsHash) {
            return [numsHash[target - num], i];
        }
        
        numsHash[num] = i;
    }
    return [-1, -1];
};