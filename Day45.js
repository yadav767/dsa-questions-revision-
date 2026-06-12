let nums = [10, 2, -2, -20, -10]

let k = -10

function subArraysSum(nums, k) {
    let map = new Map()
    let count = 0, sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        if (map.has(sum - k)) {
            count += map.get(sum - k)
        }
        else if (map.has(sum)) {
            map.set(sum, map.get(sum) + 1)
        }
        else {
            map.set(sum, 1)
        }
    }
    return count
}
console.log(subArraysSum(nums, k));