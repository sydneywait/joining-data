import employeeBuilder from "./employeeBuilder.js";
import printToDom from "./DOMPrinter.js";


const getAllEmployees = () => {
    fetch("http://localhost:8088/employees?_expand=department&_expand=computer")
        .then(employees => employees.json())
        .then(parsedEmployees => {

            parsedEmployees.forEach(employee => {
                const HTMLString = employeeBuilder(employee)
                printToDom(HTMLString)

            });

        })

}


/// in case I need these later
// const getAllDepartments = () => {
//     fetch("http://localhost:8088/departments")
//         .then(departments => departments.json())
//         .then(parsedDepartments => {

//             console.log(parsedDepartments)
//         })

// }

// const getAllComputers = () => {
//     fetch("http://localhost:8088/computers")
//         .then(computers => computers.json())
//         .then(parsedComputers => {

//             console.log(parsedComputers)
//         })

// }


export default getAllEmployees;

