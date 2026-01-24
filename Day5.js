let A = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let B = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];


function checkMatrix(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr1[0].length; j++) {
            if(arr1[i][j]!=arr2[i][j]){
                return "Not same";
            }
        }
    }
    return "Same"
}
console.log(checkMatrix(A,B));