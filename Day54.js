const arr = [4, 3, 2, 1]

function indexEqualToElement(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (i % 10 == arr[i]) return i   
    }
    return -1
}

console.log(indexEqualToElement(arr))