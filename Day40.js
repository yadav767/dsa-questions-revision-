const arr = [1, 2, 0, 5, 3, 9, 4, 6, 7]

function cyclicSort(arr) {
    let i = 0;
    while (i < arr.length) {
        let correctIndex =arr[i]
        if(arr[i]<arr.length && arr[i]!=arr[correctIndex]){
            let temp=arr[i]
            arr[i]=arr[correctIndex]
            arr[correctIndex]=temp
        }else{
            i++
        }
                        
    }
    for(let j=0 ;j<arr.length ;j++){
        if(arr[j]!=j){
            return j
        }
    }
}
console.log(cyclicSort(arr));