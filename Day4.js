let A = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
let b=10;
function multiplyNumber(arr,num){
    for(let i=0 ;i<arr.length ;i++){
        for(let j=0 ;j<arr[0].length ;j++){
            arr[i][j]*=num
        }
    }
    return arr
}
console.log(multiplyNumber(A,b));