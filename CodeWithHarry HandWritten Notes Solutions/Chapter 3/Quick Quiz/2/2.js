let student = {
    name: "Amit",
    age: 19,
    marks: 85
};

for (let key in student) {
    console.log(key + " : " + student[key]);
}
