const arr = [2, 3, 3,  4, 5, 6, 7, 8, 9]

function firstAndLastOccurance(arr, target) {
    let start=findElement(arr,target,true)
    let end=findElement(arr,target,false)
    return [start,end]
}

function findElement(arr, target, isTrue) {
    let start = 0;
    let end = arr.length - 1
    let ans = -1
    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        if (arr[mid] == target) {
            if (isTrue) {
                ans = mid;
                end = mid - 1
            } else {
                ans = mid;
                start = mid + 1
            }
        }
        else if (arr[mid] > target) end = mid - 1
        else start = mid + 1
    }
    return ans
}

console.log(firstAndLastOccurance(arr,3));