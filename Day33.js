const arr=[2,4,6,3,5,7,8,9,10,1]

function cyclicSort(arr){
    let i=0;
    while(i<arr.length){
        const currentIndex=arr[i]-1
        if(arr[i]!=arr[currentIndex]){
            let temp=arr[i];
            arr[i]=arr[currentIndex];
            arr[currentIndex]=temp
        }else{
            i++
        }
    }
    return arr
}
console.log(cyclicSort(arr));