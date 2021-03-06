const http = require('http');
const fs = require('fs');
const fileContent = fs.readFileSync("tut59.html");

// creating sever
const server = http.createServer((req,res)=>{
    res.writeHead(200,{'content-type' : 'text/html'})
    res.end(fileContent);
})

// port 80 is very simple to use an d it can directly write url i.e 127.0.0.1 
server.listen(80,'127.0.0.1',()=>{
    console.log("THis is the port 80 and local host is 127.0.0.1 ");
})

// const hostname = '127.0.0.1';
// const port = 80;

