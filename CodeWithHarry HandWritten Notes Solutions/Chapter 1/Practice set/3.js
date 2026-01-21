const student = {
    name: "Amit",
    marks: 90
};

console.log(student);

// Modifying object properties is allowed
student.marks = 95;
console.log(student);

// Trying to change the object to a number
student = 10; //  This will cause an error
