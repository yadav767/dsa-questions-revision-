const prompt=require(`prompt-sync`)()
const n=prompt("Enter a number to check :")

function isNeonNumber(num) {
    let square = num * num;
    let sum = 0
    while (square) {
        let rem = square % 10
        sum += rem;
        square = Math.floor(square / 10)
    }
    return sum == num
}
console.log(isNeonNumber(n))