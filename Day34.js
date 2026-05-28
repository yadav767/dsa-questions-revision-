const prompt =require(`prompt-sync`)()
const n=prompt("Enter a number to check :")
function isAbundant(n) {
    let sum = 0
    for (let i = 1; i <= Math.floor(n / 2); i++) {
        if (n % i == 0) {
            sum += i
        }
    }
    if (sum > n) console.log("Yes it is abundant number !");
    else console.log("No it is not abundant number !");
}
isAbundant(n)