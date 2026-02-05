const prompt=require(`prompt-sync`)()
const n=prompt("Enter any number :")

console.log((n & (n-1))==0 ? "Power of two " :"Not power of two ")