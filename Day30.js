const number = 12345;

function reverseNumber(n, rev) {
    if (n == 0) return rev
    return reverseNumber(Math.floor(n / 10), rev * 10 + (n % 10))
}
console.log(reverseNumber(number,0));