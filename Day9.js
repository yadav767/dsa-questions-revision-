//Merge Sort

let arr1 = [1, 2, 3, 4]
let arr2 = [5, 6, 7, 8, 9]
let ans = new Array(arr1.length + arr2.length);
let i = 0, j = 0, k = 0;

function mergeSort(arr1, arr2) {
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            ans[k] = arr1[i];
            k++, i++
        } else {
            ans[k] = arr2[j];
            k++, j++;
        }
    }
    while (i < arr1.length) {
        ans[k] = arr1[i];
        k++, i++
    }
    while (j < arr2.length) {
        ans[k] = arr2[j]
        k++, j++
    }
    return ans
}
console.log(mergeSort(arr1, arr2));