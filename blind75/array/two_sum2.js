// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9

const twoSum = (nums, target) => {
  const obj = {}
  let result = []
  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = i
  }
  for (let i = 0; i < nums.length; i++) {
    const targetIndex = obj[target - nums[i]]
    if (targetIndex && targetIndex !== i) {
      result = [i, targetIndex]
      break
    }
  }
  return result
}

const r = twoSum([1, 3, 4, 2], 6)
console.log(r)
