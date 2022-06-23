/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const numFrequency = {};
    const result = [];
    
    for (let i = 0; i < nums1.length; i++) {
        if (!(nums1[i] in numFrequency)) {
            numFrequency[nums1[i]] = 0;    
        }
        numFrequency[nums1[i]] += 1;
    }

    for (let j = 0; j < nums2.length; j++) {
        if (nums2[j] in numFrequency) {
            result.push(nums2[j]);
            numFrequency[nums2[j]] -= 1;
            if (numFrequency[nums2[j]] === 0) {
                delete numFrequency[nums2[j]];
            }
        }
    }
    return result;
};