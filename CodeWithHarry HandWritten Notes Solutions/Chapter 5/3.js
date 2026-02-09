let numbers = [10, 25, 40, 33, 100, 55];

let divisibleBy10 = numbers.filter((num) => {
    return num % 10 === 0;
});

console.log(divisibleBy10);
