const arr = [1, 2, 3, 4, 5, 2]

function findDuplicate(arr) {
    let copyArr = [...arr]

    for (let i = 0; i < copyArr.length; i++) {
        if(copyArr[arr[i]] < 0){
            return arr[i]
        }
        copyArr[arr[i]]=-copyArr[arr[i]]
    }
}

console.log(findDuplicate(arr));