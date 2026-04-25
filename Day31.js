const n = 2
function isPerfectSqrt(n) {
    if (n < 0) return false
    let sqrt = Math.sqrt(n)
    return sqrt * sqrt == n
}
console.log(isPerfectSqrt(n));