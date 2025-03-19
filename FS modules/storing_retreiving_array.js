let fs = require("fs");
let emp1 = { id: 101, name: "tom", age: 21 };  // literal type object
let empStringFormat = fs.readFileSync("employee.json", "utf-8");// string format 
let employeesJson = JSON.parse(empStringFormat);

if (employeesJson.length == 0) {
    employeesJson.push(emp1);
    let empString = JSON.stringify(employeesJson);
    fs.writeFileSync("employee.json", empString);
    console.log("Employee details stored in file successfully initially");
} else {
    let result = employeesJson.find(emp => emp.id == emp1.id);
    if (result == undefined) {
        employeesJson.push(emp1);
        let empString = JSON.stringify(employeesJson);
        fs.writeFileSync("employee.json", empString);
        console.log("Employee details stored in file successfully");
    } else {
        console.log("Employee id must be unique");
    }
}
console.log("----------------------")
console.log("All employee details are ");
employeesJson.forEach(emp => {
    console.log("Id is " + emp.id);
    console.log("Name is " + emp.name);
    console.log("Age is " + emp.age);
});