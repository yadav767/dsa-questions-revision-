const arr = [1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1]

function longestSubarray(arr) {
    const map = new Map()
    let sum = 0;
    let longestSunarray = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i] == 0 ? -1 : 1
        if (sum == 0) {
            longestSunarray = i + 1
        }
        else if (map.has(sum)) {
            if (longestSunarray < i - map.get(sum)) {
                longestSunarray = i - map.get(sum)
            }
        } else {
            map.set(sum, i)
        }
    }
    return longestSunarray
}

console.log(longestSubarray(arr));