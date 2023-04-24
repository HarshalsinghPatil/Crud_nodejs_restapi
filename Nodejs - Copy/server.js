const express = require("express");//To demand any framework we use "require" keyword

const app = express();//creating app most imp

app.use(express.json());//for taking data from user in JSON format

/* 2.Middleware :

eg when you goto any hospital before going to doctor all your tests are done .In same way when you are verified for any post the verifications etc are called as the middleware.
    so when we want to process the request of the client at that time instead of directly processing that request first we check
    1. is client is valid
    2. is he registered 
    3. is he making proper request
    The above checking is done by the middleware 

    ==>Middleware
        it is the powerful function in javascript which has the control of 
        1. request object
        2. response object
        3. next (Power to move the next step)
*/
app.use(mymiddleware);//Inside the middleware I created

function mymiddleware(req,res,next){
    console.log("Inside the middleware I created");
    next();//It will pass on the control to the next logical step
}

/* 3. Attach the route to the server  using the app*/
require("./routes/employee.route")(app);

/*1. starting server */
app.listen( 8080, ()=>{
    console.log("Server started");
})
/*  now in terminal write => node server.js 
    output is  - server started 
    => How to check ? in browser type "localhost:8080"
    => browser will show "cannot get"
*/
