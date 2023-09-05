// Introduction to JavaScript 1
// Function Declaration
// function greetTheStudent(studentName) {// Parameter // Named Function
//     return `Hello there ${studentName}`;
// }

// JavaScript Function Refactoring 2
// const greetTheStudent = function (studentName) {// Parameter // anonymous function // expression
//     return `Hello there ${studentName}`;
// }

// const greetTheStudent = (studentName) => {// Parameter // fat arrow function // expression
//     return `Hello there ${studentName}`;
// }

// const greetTheStudent = studentName => `Hello there ${studentName}`;

// JavaScript Refactoring 3
// const fullName = function (firstName, middleName, lastName) {
//     return `${lastName}, ${middleName}. ${firstName}`;
// }

const fullName = (firstName, middleName, lastName) => `${lastName}, ${middleName}. ${firstName}`;

// // Variable initialization
// const student = 'Mary Jane';
// // Function Call
// const greet = greetTheStudent(student);
// console.log(greet);

const titleName = fullName('Mary', 'R', 'Jane');
console.log(titleName);