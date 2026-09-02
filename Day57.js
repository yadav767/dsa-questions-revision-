function isPowerOfThree(n){
    if(n<=0) return false;
    while(n){
        if(n==1) return true;
        n=n/3;
    }
    return false;
}

console.log(isPowerOfThree(27));