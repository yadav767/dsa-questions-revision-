const arr=[4,6,9,4,1,2,8]

function findLargest(arr){
    let max=arr[0]
    for(let i=1 ;i<arr.length ;i++){
        if(arr[i]>max){
            max=arr[i]
        }
    }
    return max
}

console.log(findLargest(arr));