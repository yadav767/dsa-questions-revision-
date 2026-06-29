const string = "abcabcbb"

function lengthOfLongestSubstring(string) {
    let set = new Set()
    let maxLength = 0
    let left = 0
    for (let right = 0; right < string.length; right++) {
        if (set.has(string[right])) {
            set.delete(string[left]);
            left++
        }
        set.add(string[right])
        maxLength = Math.max(maxLength, right - left + 1)

    }
    return maxLength
}
console.log(lengthOfLongestSubstring(string));