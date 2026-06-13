const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]


function findDuplicate(arr) {
    let set = new Set()
    for(let elem of arr){
        if(set.has(elem)){
            return true
        }
        set.add(elem)
    }
    return false 
}

console.log(findDuplicate(arr));