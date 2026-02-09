let n = 5;

// Create array of first n natural numbers
let arr = [];

for (let i = 1; i <= n; i++) {
    arr.push(i);
}

// Calculate factorial using reduce
let factorial = arr.reduce((a, b) => {
    return a * b;
});

console.log("Factorial of", n, "is", factorial);
