let age = prompt("Enter your age:");
age = Number(age);

if (age < 0) {
    console.error("Age cannot be negative!");
} else if (age >= 18) {
    alert("You can drive!");
} else {
    alert("You cannot drive!");
}
