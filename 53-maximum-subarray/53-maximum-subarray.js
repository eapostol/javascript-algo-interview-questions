/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let windowStart = 0,
        sum = nums[0],
        maxSum = nums[0];
    
    const n = nums.length;
    for (let windowEnd = 1; windowEnd < n; windowEnd++) {
        const num = nums[windowEnd];
        sum = Math.max(sum + num, num);
        maxSum = Math.max(maxSum, sum);
        // sum += num;

        // if (sum < sum - num) {
            // sum -= num;
            // windowStart += 1;
        // }
        // maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }
    return maxSum;
};

-1
3
