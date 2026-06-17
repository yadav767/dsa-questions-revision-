const arr = [1, 2, 3, 3, 2, 1, 4]

function singleElement(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result = result ^ arr[i]
    }
    return result
}

console.log(singleElement(arr));