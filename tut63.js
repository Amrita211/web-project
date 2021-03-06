// fs is a built-in module stands for file system
// Sync stands for synchronous i.e line by line execution
const fs = require("fs");
let text = fs.readFileSync("demo.txt","utf-8"); // to read a file 
text = text.replace("file","another file"); //replace the content of file

console.log("The content of the file is:");
console.log(text);

// create a file
console.log("creating a new file");
fs.writeFileSync("abc.txt",text); // abc.txt name ki file ban jaayegi jisme text wala content hoga
