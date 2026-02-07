//Swap two number using bit wise operator
let a=5;
let b=10;
console.log(`Before swap a=${a} and b=${b}`);
a=a^b;
b=a^b;
a=a^b;
console.log(`After swap a=${a} and b=${b}`);