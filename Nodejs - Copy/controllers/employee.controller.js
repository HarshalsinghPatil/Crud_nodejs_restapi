//logic
const employees = require("../models/employee.model");
/**
 *Search all employees
 */
//This the controller hence it handles requests and also handles the response
exports.fetchAllEmployees = (req,res) =>{
    res.status(200).send(employees);
}

    let idCount = 1;
    /* create new employees 
    in postman >put>uri>body > raw > json > body > raw >change text to json
    
    
    */
    exports.createEmployee = (req,res)=>{
        //Read the request body
        const employee = req.body;

        //need to generate unique employee_id
        employee.id = ++idCount;

        //Save it in the list of the existing employee 
        employees[idCount] = employee;

        //return the response
        res.status(201).send(employees[idCount]);
    }

 /* update  ideas 
 */
        exports.updateEmployee = (req,res) =>{
        //I need to read the id passed in the path 
        //PUT 127.0.0.1:8080/employeeApp/v1/employees/1
        const employeeId = req.params.id;

        //if the employee is present  - modify else return error
        if(employees[employeeId]){
            employees[employeeId] = req.body;
            res.status(200).send(employees[employeeId]);
            }else{
                res.status(400).send({
                    message : 'employee Id passed was not correct'
                })
            }
        }

        exports.deleteEmployee = (req,res) =>{

            if(employees[req.params.id]){
                delete employees[req.params.id];
                res.status(200).send({
                    message : "Successfully deleted"
                })
            }else{
                res.status(400).send({
                    message : "Wrong employee id"
                })
            }
        }





