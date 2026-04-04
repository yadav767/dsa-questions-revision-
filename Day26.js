//Print n natural numbers in reverse order using recursion

function reversePrint(n){
    if(n==0) return ;
    console.log(n);
    return reversePrint(n-1)
}
reversePrint(10)