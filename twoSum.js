/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const mp = new Map()
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i]

        if (mp.has(diff)) {
            return [i, mp.get(diff)]
        }

        mp.set(nums[i], i)
    }
};

console.log(twoSum([2,7,11,15],9))

console.log(twoSum([3,2,4],6))