const n = 19
const copy=n
function harshadNumber(n) {
    let sum = 0;
    let rem = 0;
    while (n) {
        rem = n % 10
        sum += rem
        n = Math.floor(n / 10)
    }
    return copy%sum==0?"Harshad Number":"Not Harshad Number"
}
console.log(harshadNumber(n));
