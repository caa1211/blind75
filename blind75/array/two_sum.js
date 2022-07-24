/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    var map = {
        //v: index
    }
    for (var i = 0; i< nums.length; i++) {
       if (typeof map[target-nums[i]] !== 'undefined') {
           return [map[target-nums[i]], i]
       } else {
           map[nums[i]] = i;
       }
    }
    return null;
};