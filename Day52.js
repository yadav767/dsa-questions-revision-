const arr = [1, 2, 3, 4, 6, 8, 12]
let original = 3

function findAndDubleIt(arr, original) {
    for (let i = 0; i < arr.length; i++) {
        if (original === arr[i]) {
            original *= 2;
        }
    }
    return original;
}


console.log(findAndDubleIt(arr, original));
