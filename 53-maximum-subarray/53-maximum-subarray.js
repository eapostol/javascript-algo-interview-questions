/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let sum = nums[0],
        maxSum = nums[0];
    
    const n = nums.length;
    for (let windowEnd = 1; windowEnd < n; windowEnd++) {
        const num = nums[windowEnd];
        sum = Math.max(sum + num, num);
        maxSum = Math.max(maxSum, sum);
    }
    return maxSum;
};

-1
3
