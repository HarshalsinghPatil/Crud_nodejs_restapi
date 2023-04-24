const employeeController = require("../controllers/employee.controller");

/*
    Define routes for the calls like

    GET 127.0.0.1:8080/employeeApp/v1/employees/
*/
//to perform the GET action =>we need an app + uri + controller for uri(see above we have called it) +controller method
module.exports = (app) =>{
    //GET
    app.get("/employeeApp/v1/employees",employeeController.fetchAllEmployees);//If anyone calls this uri then call the controller(i.e like waiter) which will fetch the employee.

    //POST
    app.post("/employeeApp/v1/employees",employeeController.createEmployee);//but here we are getting error(Why? user i/p data in the form of the JSON and app understands data in JavaScript 
    //solution ==> tell the express to take data in form of json and then convert to JS ==> in "Server.js"
    
    //PUT(update)
    app.put("/employeeApp/v1/employees/:id",employeeController.updateEmployee);
    
    //Delete
    app.delete("/employeeApp/v1/employees/:id",employeeController.deleteEmployee);

}

 