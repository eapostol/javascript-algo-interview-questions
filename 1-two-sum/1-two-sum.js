/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numsMap = new Map();
    
    for(let i = 0; i < nums.length; i++) {
        const num = nums[i];
        
        if (numsMap.has(target - num)) {
            return [numsMap.get(target - num), i];
        }
        
        numsMap.set(num, i);
    }
    
    return [-1, -1];
};