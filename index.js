// Task 1

// var Array = [18, 19, 20, 21, 22];

// var Object = {
//   name: "Data",
//   code: 1,
//   items: [
//     { id: 1, name: "Item1" },
//     { id: 2, name: "Item2" },
//     { id: 3, name: "Item3" },
//     { id: 4, name: "Item4" },
//     { id: 5, name: "Item5" },
//   ],
//   tasks: ["Task1", "Task2", "Task3"],
// };
// console.log("-- ARRAY --");
// console.log(Array);
// console.log("-- OBJECT --");
// console.log(Object);

// ES5

// function greet(firstName) {
//     console.log('Labas rytas' + ' ' + 'Gustai' );
//     console.log(`Hello ${firstName}`);
// }

// ES6

// greet = (firstName, lastName = 'Plytnikas') => {
//     console.log(`Hello ${firstName} ${lastName}`);
// }

// Function as object

// const person = {
//     firstName: 'Edvardas',
//     lastName: 'Salnis',
//     // getSummary: function();
//     getSummary() {
//         return `Hello ${this.firstName} ${this.lastName}`
//     }
// };

// console.log(person.getSummary());

var personInfo = {
    firstName: 'Edvardas',
    lastName: 'Salnis',
    age: 18,
    hobbies: ['art', 'music'],
    getSummary() {
        return `Hello, my name is ${this.firstName} ${this.lastName} I'm ${this.age} old and I like ${this.hobbies[0]}, ${this.hobbies[1]}`
    }
};

console.log(personInfo);
console.log(personInfo.getSummary());