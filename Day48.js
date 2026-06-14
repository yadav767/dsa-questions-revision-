const arr = [1, 2, 3, 3, 2, 1.4]


function devideArray(arr) {
    let map = new Map()

    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            map.set(arr[i], map.get(arr[i]) + 1)
        } else {
            map.set(arr[i], 1)
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (map.get(arr[i]) % 2 != 0) return false
    }
    return true
}

console.log(devideArray(arr));