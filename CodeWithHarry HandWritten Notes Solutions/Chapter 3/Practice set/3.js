let correctNumber = 7;
let userNumber;

while (userNumber != correctNumber) {
    userNumber = prompt("Enter the correct number:");
    if (userNumber != correctNumber) {
        console.log("Try again");
    }
}

console.log("Correct number entered!");
