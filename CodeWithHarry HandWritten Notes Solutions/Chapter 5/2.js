let arr = [];
let num;

do {
    num = prompt("Enter a number:");
    num = Number(num);
    arr.push(num);
} while (num !== 0);

console.log(arr);
