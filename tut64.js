// Synchrononus or blocking
// line by line i.e ()=>{ }

// ASynchrononus or non-blocking
// line by line execution is not guaranteed
// callback eill fire 

const fs = require("fs");
 fs.readFile("demo.txt","utf-8",(error,data)=>{
    console.log(error, data);
});

console.log("This is a message"); // ye message pehle print hoga kyuki ye asynchronous hai .

// nodejs asynchronous i/o system pe work karta hai

