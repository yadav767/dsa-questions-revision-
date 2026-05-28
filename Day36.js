const prompt = require(`prompt-sync`)()

const n1 = Number(prompt("Enter the first number :"))
const n2 = Number(prompt("Enter the second number :"))

function checkFriendlyPair(num1, num2) {
    let sum1 = sumOfDivisions(num1)
    let sum2 = sumOfDivisions(num2)
    let result1 = sum1 / num1
    let result2 = sum2 / num2
    return result1 == result2
}

function sumOfDivisions(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i == 0) sum += i
    }
    return sum
}

console.log(checkFriendlyPair(n1, n2));