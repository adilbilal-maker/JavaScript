let runAgain = true;

while (runAgain) {
    let age = prompt("Enter your age:");
    age = Number(age);

    if (age >= 18) {
        alert("You can drive!");
    } else {
        alert("You cannot drive!");
    }

    runAgain = confirm("Do you want to enter age again?");
}
