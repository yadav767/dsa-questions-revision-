let arr = [1, 2, 5, 7, 5, 3, 1]     
function peakIndex(arr) {
    let start = 0;
    let end = arr.length - 1;
    let ans = -1;
    while (start < end) {
        let mid = Math.floor((start + end) / 2)
        if (arr[mid] <= arr[mid + 1]) {
            start = mid + 1
        } else {
            ans = mid
            end = mid
        }
    }
    return ans
}
console.log(peakIndex(arr));