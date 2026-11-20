const fs = require('fs');

fs.writeFileSync('demo.txt', 'Hello Node.js');

let data = fs.readFileSync('demo.txt', 'utf8');
console.log("File Content:", data);

fs.appendFileSync('demo.txt', '\nWelcome to FS Module');

data = fs.readFileSync('demo.txt', 'utf8');
console.log("Updated Content:", data);

fs.unlinkSync('demo.txt');

console.log("File deleted successfully");