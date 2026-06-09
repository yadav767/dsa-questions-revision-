const arr = [4, 5, 6, 7, 8, 9, 1, 2, 3]
const target = 1;

function findTarget(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let mid=Math.floor((start+end)/2)
        if (arr[mid] == target) {
            return mid
        }
        else {
            if (arr[start] <= arr[mid]) {
                if (arr[start] <= target && arr[mid] >= target) {
                    end = mid - 1
                } else {
                    start = mid + 1
                }
            }else {
                if (arr[mid] <= target && arr[end] >= target) {
                    start = mid + 1
                } else {
                    ens = mid - 1
                }
            }
        }

    }
}

console.log(findTarget(arr,target));