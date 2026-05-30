const arr = [6, 4, 1, 2,6, 8, 9,4 , 5, 3]

// using set

// function firstReapeatingNumber(arr){
//     let set=new Set()
//     for(let i=0 ;i<arr.length ;i++){
//         if(set.has(arr[i])){
//             return arr[i]
//         }else{
//             set.add(arr[i])
//         }
//     }
//     return "No repeating number !"
// }

//Using set

    function firstReapeatingNumber(arr) {
        let map = new Map()
        for (let i = 0; i < arr.length; i++) {
            if (map.has(arr[i])) {
                return arr[i]
            } else {
                map.set(arr[i], 1)
            }
        }
        return "No repeating character !"
    }
console.log(firstReapeatingNumber(arr));