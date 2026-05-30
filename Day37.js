const prompt = require(`prompt-sync`)()
const n1 = Number(prompt("Enter first number :"))
const n2 = Number(prompt("Enter second number :"))

function permutation(num1, num2) {
    const result1 = factorial(num1)
    const result2 = factorial(num1 - num2)
    return Math.floor(result1 / result2)
}
function factorial(num) {
    let fact = 1
    for (let i = num; i >= 1; i--) {
        fact *= i
    }
    return fact
}
console.log(permutation(n1, n2));