// to find the nth fibonaci number

let n = 27;
function fiboNacci(n){
    if(n==0 || n==1) return n;
    return (fiboNacci(n-1)+fiboNacci(n-2))
}
console.log(fiboNacci(n));