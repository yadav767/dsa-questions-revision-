let arr = [4, 5, 6, 7, 1, 2, 3]
function peakIndex(arr) {
    let start = 0;
    let end = arr.length - 1;
    let ans = -1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        if (arr[mid] < arr[mid + 1]) {
            start = mid + 1
        } else {
            and = mid
            end = mid
        }
    }
    return ans
}
console.log(peakIndex(arr));