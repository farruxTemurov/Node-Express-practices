let readline = require("readline");
// create interface which takes expression 
// need to provide input and output details. 
// process is global object and stdin and stdout 
// standard input and output device. stdin is keyboard and stdout is monitor.
let r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// this code is asynchronous code.  to get more questions answered we need to write nested questions which causes callback hell.
// Thus, we use a third party module: readline-sync
r1.question("Enter the id", (id) => {

    r1.question("Enter the name", (name) => {

        r1.question("Enter the age", (age) => {

            console.log("your id is " + id);
            console.log("your name is " + name);
            console.log("your age is " + age);
            r1.close(); // close the interface
        })

    })
})