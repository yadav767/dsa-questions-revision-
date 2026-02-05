const prompt =require(`prompt-sync`)()
const n=prompt("Enter any number to check weather it is prime or not :")
console.log((n & 1)==0?"Yes it prime ":"Not it is not prime ");