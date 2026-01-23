let A = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

function transposeMatrix (arr){
    let n=arr.length;
    let m=arr[0].length
    let ans=new Array(n)
    for(let i=0 ;i<n ;i++){
        ans[i]=[]
            for(let j=0 ;j<m ;j++){
                ans[i][j]=arr[j][i];
            }
    }
    return ans
}
console.log(transposeMatrix(A));