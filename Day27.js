//Print the power of any number using recursion
function exponent(b,e){
    if(e==0) return 1
    return b*exponent(b,e-1)
}
console.log(exponent(2,4));