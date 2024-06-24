/**
 * 26. Remove Duplicates from Sorted Array
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if (nums.length === 0) {
        return 0;
    }

    let k = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[k] !== nums[i]) {
            k++;
            nums[k] = nums[i];
        }
    }

    return k + 1;
};

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

console.log(removeDuplicates(nums));
console.log(nums);