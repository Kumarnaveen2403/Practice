let fs = require('fs');

let buffer  = fs.readFileSync('text.txt', 'utf-8');
console.log(buffer);