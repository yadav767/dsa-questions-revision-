// You are given a 2D integer matrix A, return a 1D integer array containing column-wise sums of original matrix.

const arr=[[1,2,3],[4,5,6],[7,8,9]];

function colSum(arr){
    const ans=[];
    for(let i=0; i<arr.length ;i++){
        let sum=0;
        for(let j=0 ;j<arr[i].length;j++){
            sum+=arr[j][i];
        }
        ans.push(sum)
    }
    return ans;
}
console.log(colSum(arr)); 