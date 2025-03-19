let readline_sync = require("readline-sync");
let id = readline_sync.questionInt("Enter the id: ");
let name = readline_sync.question("Enter the name: ");
let salary = readline_sync.questionFloat("Enter the salary: ");
console.log("your id is " + id);
console.log("your name is " + name);
console.log("your salary is " + salary);